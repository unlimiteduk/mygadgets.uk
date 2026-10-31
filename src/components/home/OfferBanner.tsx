import { Link } from 'react-router';

// Placeholder promo — swap the code/copy for the client's actual offer
// before launch, same as the prices in data/services.ts.
export default function OfferBanner() {
  return (
    <section className="container-12" style={{ paddingBottom: 8 }}>
      <div className="offer-band">
        <div>
          <p className="label" style={{ color: '#e7cbb8', marginBottom: 10 }}>
            West London service
          </p>
          <h2>Easy repair booking from Whitton to Feltham.</h2>
          <p>Tell us the device and fault, then choose the handover that works for you.</p>
        </div>
        <Link to="/book/" className="btn btn-on-dark">
          Book now
        </Link>
      </div>
    </section>
  );
}
