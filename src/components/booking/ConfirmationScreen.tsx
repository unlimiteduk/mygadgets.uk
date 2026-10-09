import Docket from '@/components/Docket';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import type { BookingState } from './types';
import { faultsTotal } from './types';

export default function ConfirmationScreen({ state }: { state: BookingState }) {
  const ticket = state.ticket;
  const total = faultsTotal(state.faults);

  const waText = encodeURIComponent(
    `Hi, I'd like to confirm my booking ${ticket}.\n` +
      `Device: ${state.modelName || state.deviceLabel}\n` +
      `Fault: ${state.needsDiagnosis ? 'not sure — need diagnosis' : state.faults.map((f) => f.label).join(', ')}\n` +
      `${state.fulfilment === 'pickup' ? 'Pickup requested' : 'Walking in'}\n` +
      `Name: ${state.name}\n` +
      `Preferred time: ${state.slot || 'Next available'}`
  );

  return (
    <div>
      <p className="label" style={{ color: 'var(--success)', marginBottom: 16 }}>Booking received</p>
      <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Your booking reference</h1>
      <p style={{ color: '#4B5563', marginTop: 16, maxWidth: '58ch' }}>
        We text to confirm within shop hours. Nothing is charged until you approve a written quote — quote the reference below when you arrive or message us.
      </p>

      <div style={{ maxWidth: 460, marginTop: 28 }}>
        <Docket
          id={ticket.replace('MG-', '')}
          title={state.modelName || state.deviceLabel}
          rows={[
            { k: 'FAULT', v: state.needsDiagnosis ? 'To diagnose — free' : state.faults.map((f) => f.label).join(', ') },
            { k: 'ESTIMATE', v: state.needsDiagnosis ? 'Free — quoted after diagnosis' : `From £${total}`, price: true },
            { k: 'FULFILMENT', v: state.fulfilment === 'pickup' ? 'Free pickup' : 'Walk in' },
            { k: 'NAME', v: state.name },
            { k: 'CONTACT', v: state.phone },
            { k: 'WHEN', v: state.slot || 'Next available' },
            { k: 'WHERE', v: `${SITE.street}, ${SITE.locality} ${SITE.postcode}` },
          ]}
        />
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
        <a href={`${SITE.whatsappHref}?text=${waText}`} target="_blank" rel="noopener" className="btn btn-signal">
          <WhatsAppIcon size={18} /> Confirm on WhatsApp
        </a>
        <a href={SITE.phoneHref} className="btn btn-ghost">Call the shop</a>
      </div>
    </div>
  );
}
