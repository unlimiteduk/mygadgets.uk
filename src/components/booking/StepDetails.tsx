import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Store, Truck } from 'lucide-react';
import type { BookingState } from './types';

const schema = z.object({
  fulfilment: z.enum(['walk-in', 'pickup']),
  name: z.string().trim().min(2, 'Enter your name'),
  phone: z.string().trim().min(9, 'Enter a valid phone number'),
  slot: z.string().trim().optional(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  state: BookingState;
  update: (patch: Partial<BookingState>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export default function StepDetails({ state, update, onSubmit, onBack }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fulfilment: state.fulfilment || 'walk-in', name: state.name, phone: state.phone, slot: state.slot },
  });

  const fulfilment = watch('fulfilment');

  const submit = (values: FormValues) => {
    update(values);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Almost there</h1>
      <p style={{ color: '#4B5563', marginTop: 12, marginBottom: 28 }}>How would you like to get it to us, and how do we reach you?</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 24, maxWidth: 480 }}>
        {([
          ['walk-in', Store, 'Walk in', 'Bring it to Whitton High Street'],
          ['pickup', Truck, 'Free pickup', 'We collect and return it'],
        ] as const).map(([value, Icon, label, copy]) => (
          <button
            key={value}
            type="button"
            onClick={() => setValue('fulfilment', value)}
            className="docket"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 16px',
              textAlign: 'left',
              cursor: 'pointer',
              borderColor: fulfilment === value ? 'hsl(var(--primary))' : undefined,
              boxShadow: fulfilment === value ? '0 0 0 2px hsl(var(--primary))' : undefined,
            }}
          >
            <Icon size={20} style={{ color: 'hsl(var(--primary))', flexShrink: 0 }} />
            <span>
              <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--bench-ink)' }}>{label}</span>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#6B7280' }}>{copy}</span>
            </span>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: 20, maxWidth: 480 }}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" autoComplete="name" {...register('name')} />
          {errors.name && <p style={{ color: 'var(--warn)', fontSize: '0.8125rem', marginTop: 6 }}>{errors.name.message}</p>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" autoComplete="tel" {...register('phone')} />
          {errors.phone && <p style={{ color: 'var(--warn)', fontSize: '0.8125rem', marginTop: 6 }}>{errors.phone.message}</p>}
        </div>
        <div className="field">
          <label htmlFor="slot">Preferred time (optional)</label>
          <input id="slot" placeholder="e.g. Today after 5pm · Sat morning" {...register('slot')} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
        <button type="button" onClick={onBack} className="btn btn-ghost">Back</button>
        <button type="submit" className="btn btn-signal">Confirm booking</button>
      </div>
    </form>
  );
}
