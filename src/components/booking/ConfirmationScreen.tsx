import Docket from '@/components/Docket';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import type { BookingState } from './types';
import { faultsTotal } from './types';

export default function ConfirmationScreen({ state }: { state: BookingState }) {
  const ticket = state.ticket;
  const total = faultsTotal(state.faults);

  const waText = encodeURIComponent(
    `Hi, I'd like a repair quote. My request reference is ${ticket}.\n` +
      `Device: ${state.modelName || state.deviceLabel}\n` +
      `Fault: ${state.needsDiagnosis ? 'not sure — need diagnosis' : state.faults.map((f) => f.label).join(', ')}\n` +
      `${state.fulfilment === 'pickup' ? 'Pickup requested' : 'Walking in'}\n` +
      `Name: ${state.name}\n` +
      `Contact phone: ${state.phone}\n` +
      `Preferred time: ${state.slot || 'Next available'}`
  );

  return (
    <div>
      <p className="label" style={{ color: 'var(--success)', marginBottom: 16 }}>Ready to send</p>
      <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Your repair request</h1>
      <p style={{ color: '#4B5563', marginTop: 16, maxWidth: '58ch' }}>
        Your request is ready, but has not been sent to the shop. Send it on WhatsApp below, or call us. We will confirm the time, parts and quote before your repair is booked.
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
          <WhatsAppIcon size={18} /> Send request on WhatsApp
        </a>
        <a href={SITE.landlineHref} className="btn btn-ghost">Landline {SITE.landlineDisplay}</a>
        <a href={SITE.mobileHref} className="btn btn-ghost">Mobile {SITE.mobileDisplay}</a>
      </div>
    </div>
  );
}
