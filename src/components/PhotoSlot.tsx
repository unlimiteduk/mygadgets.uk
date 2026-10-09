// Commissioned-photography slot (brief §3.7). The brief originally banned
// stock and AI imagery outright; that's been overridden for this site —
// AI-generated stand-ins are being used for these editorial/scene shots
// (see docs/image-prompts.md), and are swapped for real photographs after
// the half-day shoot when it happens. The Listing.tsx product-gallery
// slots were the one exception requiring real photos — that's since been
// overridden per-listing too (client request): a `src` fills the slot with
// an AI-generated stand-in render instead of the "to commission" placeholder.
export default function PhotoSlot({ shot, ratio = '4 / 3', src, alt }: { shot: string; ratio?: string; src?: string; alt?: string }) {
  if (src) {
    return (
      <figure className="photo-slot" style={{ aspectRatio: ratio, margin: 0, position: 'relative', overflow: 'hidden' }}>
        <img src={src} alt={alt ?? shot} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </figure>
    );
  }
  return (
    <figure className="photo-slot" style={{ aspectRatio: ratio, margin: 0 }}>
      <div className="photo-grid-lines" aria-hidden="true" />
      <div style={{ position: 'absolute', top: 14, left: 14 }} className="label">
        Photo · to commission
      </div>
      <figcaption className="photo-caption">{shot}</figcaption>
    </figure>
  );
}
