import { Check } from 'lucide-react';
import { TRACK_STAGES, type TrackResult } from '@/data/track';

export default function TrackTimeline({ result }: { result: TrackResult }) {
  return (
    <div className="docket" style={{ padding: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
        <span className="label" style={{ color: 'hsl(var(--primary))' }}>{result.ticket}</span>
        <span style={{ fontSize: '0.8125rem', color: '#6B7280' }}>{result.device}</span>
      </div>

      <div style={{ marginTop: 28 }}>
        {TRACK_STAGES.map((stage, i) => {
          const done = i < result.stageIndex;
          const current = i === result.stageIndex;
          const last = i === TRACK_STAGES.length - 1;
          return (
            <div key={stage} style={{ display: 'flex', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 999,
                    flexShrink: 0,
                    background: done || current ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                    color: done || current ? '#FFFFFF' : 'hsl(var(--primary))',
                  }}
                >
                  {done ? <Check size={16} /> : <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{i + 1}</span>}
                </span>
                {!last && <span style={{ width: 2, flex: 1, minHeight: 32, background: done ? 'hsl(var(--primary))' : 'var(--bench-rule)' }} />}
              </div>
              <div style={{ paddingBottom: 28 }}>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: current ? 'hsl(var(--primary))' : 'var(--bench-ink)' }}>{stage}</div>
                {current && <p style={{ fontSize: '0.8125rem', color: '#6B7280', marginTop: 4, marginBottom: 0 }}>{result.note}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
