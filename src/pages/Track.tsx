import { useState } from 'react';
import { Search } from 'lucide-react';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Crumbs from '@/components/Crumbs';
import TrackTimeline from '@/components/TrackTimeline';
import { mockLookup, type TrackResult } from '@/data/track';
import { SITE } from '@/data/site';

export default function Track() {
  const [id, setId] = useState('');
  const [result, setResult] = useState<TrackResult | null | undefined>(undefined);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(mockLookup(id) ?? null);
  };

  return (
    <Layout>
      <Seo
        title={`Track your repair | ${SITE.name}`}
        description={`Check the live status of your repair at ${SITE.name} — enter your booking reference to see where your device is in the queue.`}
        path="/track/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Track repair', path: '/track/' }])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Track repair' }]} />
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Track your repair</h1>
            <p style={{ color: '#4B5563', marginTop: 16, maxWidth: '56ch' }}>
              Enter the booking reference from your confirmation text or WhatsApp message (e.g. MG-2481) to see where your device is right now.
            </p>

            <form onSubmit={submit} style={{ display: 'flex', gap: 12, marginTop: 28, maxWidth: 420, flexWrap: 'wrap' }}>
              <div className="field" style={{ flex: 1, minWidth: 200 }}>
                <label htmlFor="booking-id">Booking reference</label>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                  <input
                    id="booking-id"
                    placeholder="MG-2481"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={{ paddingLeft: 40 }}
                    autoComplete="off"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-signal" style={{ alignSelf: 'flex-end', height: 48 }}>
                Track
              </button>
            </form>

            {result === null && (
              <p style={{ marginTop: 20, color: 'var(--warn)', fontSize: '0.9375rem' }}>
                We couldn't find that reference. Double-check the code from your confirmation message, or{' '}
                <a href={SITE.whatsappHref} target="_blank" rel="noopener" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>
                  WhatsApp us
                </a>{' '}
                and we'll look it up.
              </p>
            )}

            {result && (
              <div style={{ marginTop: 28, maxWidth: 480 }}>
                <TrackTimeline result={result} />
              </div>
            )}
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8" style={{ alignSelf: 'start' }}>
            <figure
              style={{
                margin: 0,
                aspectRatio: '16 / 9',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                border: '1px solid var(--bench-rule)',
              }}
            >
              <img
                src="/images/track-repair-status.webp"
                alt="Laptop and phone on the repair bench, mid-diagnostic"
                width={1376}
                height={768}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </figure>
          </div>
        </div>
      </section>
    </Layout>
  );
}
