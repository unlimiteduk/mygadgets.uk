import { useEffect, useState } from 'react';

// GDPR consent with a genuine reject option (brief §7). Analytics
// (GA4/Clarity) only load after explicit accept — wired at launch.
export default function Consent() {
  const [state, setState] = useState<'unset' | 'accepted' | 'rejected'>('accepted');

  useEffect(() => {
    const v = localStorage.getItem('mg-consent');
    setState(v === 'accepted' || v === 'rejected' ? v : 'unset');
  }, []);

  const choose = (v: 'accepted' | 'rejected') => {
    localStorage.setItem('mg-consent', v);
    setState(v);
    if (v === 'accepted') {
      // GA4 + Clarity load here, after consent — never before.
      window.dispatchEvent(new Event('mg-consent-accepted'));
    }
  };

  if (state !== 'unset') return null;

  return (
    <div className="consent" role="dialog" aria-label="Cookie consent">
      <p className="small" style={{ margin: '0 0 4px', color: 'var(--bench-ink)', fontWeight: 600 }}>
        Cookies, briefly.
      </p>
      <p className="small" style={{ margin: '0 0 14px', color: '#4B5563' }}>
        We use analytics to see which repairs people search for. Nothing is sold, nothing tracks you elsewhere. Reject and we set only the cookie that remembers you said no.
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn btn-signal" style={{ padding: '10px 16px', fontSize: '0.8125rem' }} onClick={() => choose('accepted')}>
          Accept
        </button>
        <button className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: '0.8125rem' }} onClick={() => choose('rejected')}>
          Reject
        </button>
      </div>
    </div>
  );
}
