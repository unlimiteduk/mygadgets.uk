import Docket from '@/components/Docket';
import type { BookingState } from './types';
import { faultsTotal } from './types';

export default function PriceSummaryPanel({ state }: { state: BookingState }) {
  const hasDevice = !!state.deviceLabel;
  const total = faultsTotal(state.faults);

  const rows = [
    { k: 'DEVICE', v: hasDevice ? state.deviceLabel : 'Not chosen yet' },
    ...(state.modelName ? [{ k: 'MODEL', v: state.modelName }] : []),
    ...(state.needsDiagnosis
      ? [{ k: 'FAULT', v: 'Free diagnosis' }]
      : state.faults.map((f) => ({ k: f.label.toUpperCase(), v: `${f.price} · ${f.turnaround}` }))),
    ...(state.fulfilment ? [{ k: 'FULFILMENT', v: state.fulfilment === 'pickup' ? 'Free pickup' : 'Walk in' }] : []),
    {
      k: 'ESTIMATE',
      v: state.needsDiagnosis ? 'Free — quoted after diagnosis' : state.faults.length ? `From £${total}` : 'Pick an issue',
      price: true,
    },
  ];

  return (
    <Docket id="EST" title="Your estimate" rows={rows} />
  );
}
