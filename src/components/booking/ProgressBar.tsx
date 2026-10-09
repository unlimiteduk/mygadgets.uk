const STEPS = ['Device', 'Issue', 'Details'];

export default function ProgressBar({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, maxWidth: 420 }}>
      {STEPS.map((label, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div key={label} style={{ display: 'flex', alignItems: 'center', flex: n < STEPS.length ? 1 : undefined, gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 999,
                  flexShrink: 0,
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  background: done || active ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                  color: done || active ? '#FFFFFF' : 'hsl(var(--primary))',
                }}
              >
                {n}
              </span>
              <span
                className="hidden sm:inline"
                style={{ fontSize: '0.8125rem', fontWeight: 600, color: active ? 'var(--bench-ink)' : '#6B7280', whiteSpace: 'nowrap' }}
              >
                {label}
              </span>
            </div>
            {n < STEPS.length && <span style={{ flex: 1, height: 2, background: done ? 'hsl(var(--primary))' : 'var(--bench-rule)', borderRadius: 1 }} />}
          </div>
        );
      })}
    </div>
  );
}
