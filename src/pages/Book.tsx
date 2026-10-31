import { useState } from 'react';
import { useSearchParams } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import { DEVICE_HUBS } from '@/data/services';
import ProgressBar from '@/components/booking/ProgressBar';
import StepDevice from '@/components/booking/StepDevice';
import StepIssue from '@/components/booking/StepIssue';
import StepDetails from '@/components/booking/StepDetails';
import PriceSummaryPanel from '@/components/booking/PriceSummaryPanel';
import ConfirmationScreen from '@/components/booking/ConfirmationScreen';
import type { BookingState } from '@/components/booking/types';
import { SITE } from '@/data/site';

const EMPTY_STATE: BookingState = {
  deviceSlug: '',
  deviceLabel: '',
  modelSlug: '',
  modelName: '',
  faults: [],
  needsDiagnosis: false,
  fulfilment: 'walk-in',
  name: '',
  phone: '',
  slot: '',
  ticket: '',
};

// Generated in an event handler (booking confirm), never during render —
// Math.random in render is a React purity violation.
function generateTicket(): string {
  return `MG-${2400 + Math.floor(Math.random() * 599)}`;
}

function stateForPrefill(devicePrefill: string | null): BookingState {
  const hub = DEVICE_HUBS.find((d) => d.slug === devicePrefill);
  return hub ? { ...EMPTY_STATE, deviceSlug: hub.slug, deviceLabel: hub.label } : EMPTY_STATE;
}

export default function Book() {
  const [params] = useSearchParams();
  const devicePrefill = params.get('device');
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [state, setState] = useState<BookingState>(() => stateForPrefill(devicePrefill));
  const [appliedPrefill, setAppliedPrefill] = useState(devicePrefill);

  // Re-sync from the URL if it changes while this page stays mounted
  // (e.g. browser back/forward between two /book/?device= links) — a
  // render-time adjustment rather than an effect, per React's guidance
  // on adjusting state when a prop changes.
  if (devicePrefill !== appliedPrefill) {
    setAppliedPrefill(devicePrefill);
    setStep(1);
    setState(stateForPrefill(devicePrefill));
  }

  const update = (patch: Partial<BookingState>) => setState((s) => ({ ...s, ...patch }));

  if (step === 4) {
    return (
      <Layout>
        <Seo title={`Booked — job ticket | ${SITE.name}`} description="Your repair booking is in. We confirm every booking by text." path="/book/" />
        <section className="container-12 section-pad">
          <ConfirmationScreen state={state} />
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title={`Book a repair — Whitton High Street | ${SITE.name}`}
        description={`Book a repair at ${SITE.name}, Whitton High Street. Free diagnosis, fixed quote before any work, most repairs same day. Or WhatsApp us — same bench, same prices.`}
        path="/book/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Book', path: '/book/' }])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <ProgressBar step={step} />
            {step === 1 && <StepDevice state={state} update={update} onNext={() => setStep(2)} />}
            {step === 2 && <StepIssue state={state} update={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && (
              <StepDetails
                state={state}
                update={update}
                onSubmit={() => {
                  update({ ticket: generateTicket() });
                  setStep(4);
                }}
                onBack={() => setStep(2)}
              />
            )}
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9" style={{ marginTop: 8 }}>
            <div style={{ position: 'sticky', top: 96 }}>
              <PriceSummaryPanel state={state} />
              <p className="small" style={{ marginTop: 14, color: '#6B7280' }}>
                Rather WhatsApp? Send a photo of the damage and your model number and we'll come back with a price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
