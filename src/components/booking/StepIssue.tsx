import { useMemo } from 'react';
import { HelpCircle, Check } from 'lucide-react';
import { MODELS } from '@/data/models';
import { servicesByDevice } from '@/data/services';
import type { BookingState, SelectedFault } from './types';

interface Props {
  state: BookingState;
  update: (patch: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepIssue({ state, update, onNext, onBack }: Props) {
  const options: SelectedFault[] = useMemo(() => {
    const model = MODELS.find((m) => m.slug === state.modelSlug);
    if (model) return model.faults;
    return servicesByDevice(state.deviceSlug).map((s) => ({ label: s.name, price: s.fromPrice, turnaround: s.turnaround, serviceSlug: s.slug }));
  }, [state.modelSlug, state.deviceSlug]);

  const toggleFault = (f: SelectedFault) => {
    const exists = state.faults.some((x) => x.label === f.label);
    update({
      needsDiagnosis: false,
      faults: exists ? state.faults.filter((x) => x.label !== f.label) : [...state.faults, f],
    });
  };

  const canContinue = state.needsDiagnosis || state.faults.length > 0;

  return (
    <div>
      <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>What's wrong with it?</h1>
      <p style={{ color: '#4B5563', marginTop: 12, marginBottom: 28 }}>Select everything that applies — you can pick more than one.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 16 }}>
        {options.map((f) => {
          const active = state.faults.some((x) => x.label === f.label);
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => toggleFault(f)}
              className="docket"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                padding: '14px 16px',
                textAlign: 'left',
                cursor: 'pointer',
                borderColor: active ? 'hsl(var(--primary))' : undefined,
                boxShadow: active ? '0 0 0 2px hsl(var(--primary))' : undefined,
              }}
            >
              <span>
                <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--bench-ink)' }}>{f.label}</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#6B7280', marginTop: 2 }}>{f.price} · {f.turnaround}</span>
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  flexShrink: 0,
                  border: active ? 'none' : '1.5px solid var(--bench-rule)',
                  background: active ? 'hsl(var(--primary))' : 'transparent',
                  color: '#FFFFFF',
                }}
              >
                {active && <Check size={14} />}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => update({ needsDiagnosis: !state.needsDiagnosis, faults: [] })}
        className="docket"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 16px',
          width: '100%',
          textAlign: 'left',
          cursor: 'pointer',
          marginBottom: 32,
          borderColor: state.needsDiagnosis ? 'hsl(var(--primary))' : undefined,
          boxShadow: state.needsDiagnosis ? '0 0 0 2px hsl(var(--primary))' : undefined,
        }}
      >
        <HelpCircle size={20} style={{ color: 'hsl(var(--primary))', flexShrink: 0 }} />
        <span>
          <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--bench-ink)' }}>Not sure — I need a diagnosis</span>
          <span style={{ display: 'block', fontSize: '0.75rem', color: '#6B7280', marginTop: 2 }}>Free — we'll find the fault and quote before any work</span>
        </span>
      </button>

      <div style={{ display: 'flex', gap: 12 }}>
        <button type="button" onClick={onBack} className="btn btn-ghost">Back</button>
        <button type="button" disabled={!canContinue} onClick={onNext} className="btn btn-signal" style={{ opacity: canContinue ? 1 : 0.5 }}>
          Continue
        </button>
      </div>
    </div>
  );
}
