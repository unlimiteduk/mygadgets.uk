import { useMemo, useState } from 'react';
import { Laptop, Smartphone, Tablet, TabletSmartphone, Laptop2, Search } from 'lucide-react';
import { DEVICE_HUBS } from '@/data/services';
import { MODELS } from '@/data/models';
import { DEVICE_SLUG_TO_MODEL_DEVICE, type BookingState } from './types';

const ICONS: Record<string, typeof Laptop> = {
  macbook: Laptop,
  iphone: Smartphone,
  ipad: Tablet,
  samsung: TabletSmartphone,
  laptop: Laptop2,
};

interface Props {
  state: BookingState;
  update: (patch: Partial<BookingState>) => void;
  onNext: () => void;
}

export default function StepDevice({ state, update, onNext }: Props) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const modelDevice = DEVICE_SLUG_TO_MODEL_DEVICE[state.deviceSlug];

  const matches = useMemo(() => {
    if (!modelDevice) return [];
    const pool = MODELS.filter((m) => m.device === modelDevice);
    if (!query.trim()) return pool.slice(0, 8);
    const q = query.toLowerCase();
    return pool.filter((m) => m.name.toLowerCase().includes(q) || m.identifier.toLowerCase().includes(q)).slice(0, 8);
  }, [modelDevice, query]);

  const canContinue = !!state.deviceSlug && (modelDevice ? !!state.modelSlug : state.modelName.trim().length > 0);

  return (
    <div>
      <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>What needs fixing?</h1>
      <p style={{ color: '#4B5563', marginTop: 12, marginBottom: 32 }}>Pick a device, then find your exact model.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12, marginBottom: 28 }}>
        {DEVICE_HUBS.map((d) => {
          const Icon = ICONS[d.slug] ?? Laptop;
          const active = state.deviceSlug === d.slug;
          return (
            <button
              key={d.slug}
              type="button"
              onClick={() => {
                update({ deviceSlug: d.slug, deviceLabel: d.label, modelSlug: '', modelName: '', faults: [], needsDiagnosis: false });
                setQuery('');
              }}
              className="docket"
              style={{
                padding: '18px 14px',
                textAlign: 'left',
                cursor: 'pointer',
                borderColor: active ? 'hsl(var(--primary))' : undefined,
                boxShadow: active ? '0 0 0 2px hsl(var(--primary))' : undefined,
              }}
            >
              <Icon size={22} style={{ color: 'hsl(var(--primary))', marginBottom: 10 }} />
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--bench-ink)' }}>{d.label}</div>
            </button>
          );
        })}
      </div>

      {state.deviceSlug && modelDevice && (
        <div className="field" style={{ position: 'relative', maxWidth: 420 }}>
          <label htmlFor="model-search">Model</label>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
            <input
              id="model-search"
              placeholder={`Search ${state.deviceLabel} models…`}
              value={state.modelName || query}
              onChange={(e) => { setQuery(e.target.value); update({ modelSlug: '', modelName: '' }); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
              style={{ paddingLeft: 40 }}
              autoComplete="off"
            />
          </div>
          {!state.modelSlug && focused && (
            <div
              className="panel"
              style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 6, maxHeight: 260, overflowY: 'auto', zIndex: 10, padding: 6 }}
            >
              {matches.length === 0 && <div style={{ padding: 12, fontSize: '0.875rem', color: '#6B7280' }}>No models match — try a different search.</div>}
              {matches.map((m) => (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => { update({ modelSlug: m.slug, modelName: `${m.name} · ${m.identifier}` }); setQuery(''); }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderRadius: 8,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    color: 'var(--bench-ink)',
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {m.name} <span style={{ color: '#6B7280' }}>· {m.identifier} · {m.year}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {state.deviceSlug && !modelDevice && (
        <div className="field" style={{ maxWidth: 420 }}>
          <label htmlFor="model-free">Model</label>
          <input
            id="model-free"
            placeholder="e.g. Dell XPS 13, HP Pavilion 15…"
            value={state.modelName}
            onChange={(e) => update({ modelName: e.target.value })}
          />
        </div>
      )}

      <button type="button" disabled={!canContinue} onClick={onNext} className="btn btn-signal" style={{ marginTop: 32, opacity: canContinue ? 1 : 0.5 }}>
        Continue
      </button>
    </div>
  );
}
