import { SITE } from '@/data/site';

const FAQS = [
  { q: 'How long does a repair take?', a: 'Most screens and batteries are done in 30–60 minutes while you wait. Board-level or liquid-damage work usually takes 1–5 days — we tell you which before you leave the device with us.' },
  { q: 'What warranty do I get?', a: `${SITE.repairsWarranty} on every repair, ${SITE.refurbWarranty} on refurbished units — in writing on your job docket, not just a verbal promise.` },
  { q: 'Is my data safe during a repair?', a: 'Screen, battery and port repairs never touch your storage. For board-level or data-recovery work we talk you through exactly what we can and can\'t access before starting.' },
  { q: 'Walk-in or book ahead — which is faster?', a: 'Walk-ins are always welcome. Booking ahead means we reserve the part, so the job starts the moment you arrive instead of waiting for stock.' },
  { q: 'Do you offer doorstep pickup?', a: 'Ask when you book — we can often collect and return locally rather than you needing to visit the shop.' },
  { q: 'What payment methods do you accept?', a: 'Card, contactless and cash in the shop. Nothing is charged until you approve a written quote.' },
  { q: 'What if my device is out of warranty or discontinued?', a: 'We still repair it where parts exist, and we\'ll tell you honestly if a fix isn\'t worth the cost versus a refurbished replacement.' },
  { q: 'What if the repair doesn\'t fix the problem?', a: 'If our fix doesn\'t resolve the fault you brought it in for, you don\'t pay — that\'s the no fix, no fee promise.' },
];

export default function HomeFaq() {
  return (
    <section className="container-12 section-pad" style={{ paddingTop: 0 }}>
      <div className="grid-12">
        <div className="col-span-12 lg:col-span-4">
          <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>FAQ</p>
          <h2 className="display-l" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Questions people ask us</h2>
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                {f.q}
                <span className="faq-marker">+</span>
              </summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
