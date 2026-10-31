const STEPS = [
  { n: '01', h: 'Book online', p: 'Pick your device and fault — takes under a minute, no account needed.' },
  { n: '02', h: 'Free pickup or walk in', p: 'Drop it at the counter on Whitton High Street, or ask about doorstep pickup.' },
  { n: '03', h: 'Repair + quality check', p: 'We fix it on the bench, then test every function before it leaves us.' },
  { n: '04', h: 'Same-day return', p: 'Most repairs are back in your hands the same day, warranty in writing.' },
];

export default function HowItWorks() {
  return (
    <section className="container-12 section-pad">
      <div className="split-media">
        <div>
          <p className="label section-kicker" style={{ color: 'hsl(var(--primary))' }}>How it works</p>
          <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>From booking to fixed, in four steps</h2>
          <div className="steps" style={{ marginTop: 28 }}>
            {STEPS.map((s, i) => (
              <div key={s.n}>
                <div className="step-no">{i + 1}</div>
                <div style={{ fontWeight: 680, fontSize: '1.0625rem', letterSpacing: '-0.02em' }}>{s.h}</div>
                <p style={{ fontSize: '0.9375rem', color: '#5c564e', marginTop: 6 }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
        <figure className="frame" style={{ aspectRatio: '4 / 5' }}>
          <img
            src="/images/hero-device-group.webp"
            alt="iPhone, MacBook and Galaxy phone laid out on the repair bench, freshly repaired"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
