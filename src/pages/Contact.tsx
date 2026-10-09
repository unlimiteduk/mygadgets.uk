import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Map from '@/components/Map';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const SUBJECTS = ['General enquiry', 'Repair question', 'Business account', 'Sell my device', 'Other'] as const;

const schema = z
  .object({
    name: z.string().trim().min(2, 'Enter your name'),
    email: z.string().trim().email('Enter a valid email').optional().or(z.literal('')),
    phone: z.string().trim().min(9, 'Enter a valid phone number').optional().or(z.literal('')),
    subject: z.enum(SUBJECTS),
    message: z.string().trim().min(10, 'Give us a few more details'),
  })
  .refine((v) => v.email || v.phone, {
    message: 'Leave a phone number or an email so we can reply',
    path: ['phone'],
  });

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [sentVia, setSentVia] = useState<'whatsapp' | 'email' | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', phone: '', subject: 'General enquiry', message: '' },
  });

  const buildMessage = (v: FormValues) => {
    const lines = [`${v.subject} from ${v.name}`, '', v.message, ''];
    if (v.phone) lines.push(`Phone: ${v.phone}`);
    if (v.email) lines.push(`Email: ${v.email}`);
    return lines.join('\n');
  };

  const sendViaWhatsApp = (v: FormValues) => {
    window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(buildMessage(v))}`, '_blank', 'noopener');
    setSentVia('whatsapp');
  };

  const sendViaEmail = (v: FormValues) => {
    const subject = encodeURIComponent(`${v.subject} — My Gadgets UK website`);
    const body = encodeURIComponent(buildMessage(v));
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSentVia('email');
  };

  return (
    <Layout>
      <Seo
        title="Contact — Whitton High Street, TW2 | My Gadgets UK"
        description="Call, WhatsApp or walk in: My Gadgets UK, Whitton High Street, TW2. Mon–Fri 09:00–18:30, Sat 09:30–17:30. Two doors from Whitton station."
        path="/contact/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Talk to the bench</h1>
            <p style={{ color: '#4B5563', fontSize: '1.125rem', marginTop: 20, maxWidth: '58ch' }}>
              The fastest answer is a call or a WhatsApp with a photo of the damage. For anything else, send a message below and we will get back to you within one working day.
            </p>

            <Reveal>
              <form
                className="panel"
                style={{ padding: 32, marginTop: 32, maxWidth: 560 }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div style={{ display: 'grid', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                    <div className="field">
                      <label htmlFor="c-name">Name</label>
                      <input id="c-name" autoComplete="name" {...register('name')} />
                      {errors.name && <p style={{ color: 'var(--warn)', fontSize: '0.8125rem', marginTop: 6 }}>{errors.name.message}</p>}
                    </div>
                    <div className="field">
                      <label htmlFor="c-subject">What's this about</label>
                      <select id="c-subject" {...register('subject')}>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                    <div className="field">
                      <label htmlFor="c-phone">Phone</label>
                      <input id="c-phone" type="tel" autoComplete="tel" {...register('phone')} />
                      {errors.phone && <p style={{ color: 'var(--warn)', fontSize: '0.8125rem', marginTop: 6 }}>{errors.phone.message}</p>}
                    </div>
                    <div className="field">
                      <label htmlFor="c-email">Email</label>
                      <input id="c-email" type="email" autoComplete="email" {...register('email')} />
                      {errors.email && <p style={{ color: 'var(--warn)', fontSize: '0.8125rem', marginTop: 6 }}>{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="c-message">Message</label>
                    <textarea id="c-message" rows={5} placeholder="Tell us the device, the fault, and anything else useful." {...register('message')} />
                    {errors.message && <p style={{ color: 'var(--warn)', fontSize: '0.8125rem', marginTop: 6 }}>{errors.message.message}</p>}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
                    <button type="button" onClick={handleSubmit(sendViaWhatsApp)} className="btn btn-signal">
                      <WhatsAppIcon size={18} /> Send via WhatsApp
                    </button>
                    <button type="button" onClick={handleSubmit(sendViaEmail)} className="btn btn-ghost">
                      <Send size={16} /> Send via email
                    </button>
                  </div>

                  {sentVia && (
                    <p className="small" style={{ color: 'var(--success)', margin: 0 }}>
                      {sentVia === 'whatsapp' ? 'Opening WhatsApp with your message ready to send.' : 'Opening your email app with your message ready to send.'}
                    </p>
                  )}

                  <p className="small" style={{ color: '#6B7280', margin: 0 }}>
                    We reply within one working day. No mailing lists, ever.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <div className="panel" style={{ padding: 24 }}>
                <div style={{ display: 'grid', gap: 0 }}>
                  {[
                    ['Call', SITE.phoneDisplay, SITE.phoneHref],
                    ['WhatsApp', SITE.whatsappDisplay, SITE.whatsappHref],
                    ['Email', SITE.email, `mailto:${SITE.email}`],
                  ].map(([k, v, href]) => (
                    <a
                      key={k}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid var(--bench-rule)', textDecoration: 'none', color: 'var(--bench-ink)' }}
                    >
                      <span className="label">{k}</span>
                      <span className="mono" style={{ fontWeight: 500 }}>{v}</span>
                    </a>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--bench-rule)' }}>
                    <span className="label">Address</span>
                    <span style={{ textAlign: 'right' }}>{SITE.street}, {SITE.locality}<br />{SITE.region} {SITE.postcode}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0' }}>
                    <span className="label">Hours</span>
                    <span className="mono small" style={{ textAlign: 'right' }}>Mon–Fri 09:00–18:30<br />Sat 09:30–17:30<br />Sun closed</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div style={{ marginTop: 24 }}>
                <Map />
                <figure
                  style={{
                    margin: '24px 0 0',
                    aspectRatio: '16 / 10',
                    borderRadius: 'var(--radius-card)',
                    overflow: 'hidden',
                    border: '1px solid var(--bench-rule)',
                  }}
                >
                  <img
                    src="/images/storefront.webp"
                    alt="My Gadgets UK shop front on Whitton High Street"
                    width={1376}
                    height={774}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </figure>
                <p className="small" style={{ color: '#6B7280', marginTop: 14 }}>
                  {SITE.landmark} {SITE.parking}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
