import { Link } from 'react-router';
import { DEVICE_HUBS, servicesByDevice } from '@/data/services';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function PricingPreview() {
  return (
    <section className="container-12 section-pad" style={{ paddingTop: 0 }}>
      <div style={{ marginBottom: 32 }}>
        <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>Transparent pricing</p>
        <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>No hidden charges, ever</h2>
        <p style={{ color: '#4B5563', marginTop: 12, maxWidth: '60ch' }}>
          Every price on this site is what you pay — fitted, tested, warrantied. Pick a device to see the top repairs.
        </p>
      </div>

      <Tabs defaultValue={DEVICE_HUBS[0].slug}>
        <TabsList style={{ height: 'auto', flexWrap: 'wrap', padding: 4, background: '#efeae3' }}>
          {DEVICE_HUBS.map((d) => (
            <TabsTrigger key={d.slug} value={d.slug} style={{ padding: '9px 16px' }}>
              {d.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {DEVICE_HUBS.map((d) => {
          const rows = servicesByDevice(d.slug).slice(0, 5);
          return (
            <TabsContent key={d.slug} value={d.slug}>
              <div className="panel" style={{ padding: 0, overflow: 'hidden', marginTop: 16 }}>
                <table className="price-table">
                  <thead>
                    <tr>
                      <th>Repair</th>
                      <th>From</th>
                      <th>Turnaround</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((s) => (
                      <tr key={s.slug}>
                        <td>{s.name}</td>
                        <td className="num" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>{s.fromPrice}</td>
                        <td className="num">{s.turnaround}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>

      <div style={{ marginTop: 24 }}>
        <Link to="/repairs/prices/" className="btn btn-ghost">See the full price list →</Link>
      </div>
    </section>
  );
}
