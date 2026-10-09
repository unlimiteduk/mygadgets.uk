const STEPS = [
  { n: '01', h: 'Book online', p: 'Pick your device and fault — takes under a minute, no account needed.' },
  { n: '02', h: 'Free pickup or walk in', p: 'Drop it at the counter on Whitton High Street, or ask about doorstep pickup.' },
  { n: '03', h: 'Repair + quality check', p: 'We fix it on the bench, then test every function before it leaves us.' },
  { n: '04', h: 'Same-day return', p: 'Most repairs are back in your hands the same day, warranty in writing.' },
];

export default function HowItWorks() {
  return (
    <section className="container-12 section-pad">
      <div style={{ marginBottom: 40 }}>
        <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>How it works</p>
        <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>From booking to fixed, in four steps</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
        {STEPS.map((s, i) => (
          <div key={s.n} style={{ position: 'relative', paddingLeft: 0 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: 'hsl(var(--primary))',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              {i < STEPS.length - 1 && (
                <span className="hidden lg:block" style={{ flex: 1, height: 2, background: 'var(--bench-rule)' }} />
              )}
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--bench-ink)' }}>{s.h}</div>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: 6 }}>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
