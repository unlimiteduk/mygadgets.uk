import { ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router";
import Seo, {
  aggregateRatingSchema,
  breadcrumbSchema,
  visibleReviewSchema,
} from "@/components/Seo";
import Layout from "@/components/Layout";
import GoogleReviewCard from "@/components/GoogleReviewCard";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { SITE } from "@/data/site";
import { GOOGLE_RATING, GOOGLE_REVIEWS } from "@/data/reviews";

export default function Reviews() {
  return (
    <Layout>
      <Seo
        title={`Reviews of My Gadgets Whitton, Twickenham — ${GOOGLE_RATING.average.toFixed(1)} from ${GOOGLE_RATING.count} Google reviews`}
        description={`${GOOGLE_RATING.average.toFixed(1)} stars from ${GOOGLE_RATING.count} Google reviews for ${SITE.name}. Read customer experiences of our local repair shop at 23 High Street, Whitton, Twickenham.`}
        path="/reviews/"
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews/" },
          ]),
          aggregateRatingSchema(),
          ...visibleReviewSchema(GOOGLE_REVIEWS),
        ]}
      />
      <section className="container-12 section-pad lg-reviews-page">
        <div className="lg-reviews-intro">
          <div>
            <p className="lg-eyebrow">LOCAL PEOPLE. HAPPY DEVICES.</p>
            <h1 className="display-l">
              Kind words.
              <br />
              From our customers.
            </h1>
            <p className="lg-reviews-lede">
              The {GOOGLE_RATING.average.toFixed(1)} rating from{" "}
              {GOOGLE_RATING.count} reviews is Google’s rating for the shop at
              23 High Street, Whitton, Twickenham. See{" "}
              <Link to="/repairs/macbook/">MacBook repair</Link>,{" "}
              <Link to="/repairs/console/">console repair</Link> and the{" "}
              <Link to="/shop/">refurbished MacBook shop</Link>.
            </p>
          </div>
          <div className="lg-google-rating-card">
            <div>
              <GoogleIcon size={26} />
              <span>My Gadgets Whitton</span>
            </div>
            <strong>
              {GOOGLE_RATING.average.toFixed(1)}
              <span>/ 5</span>
            </strong>
            <div className="lg-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p>Based on {GOOGLE_RATING.count} Google reviews</p>
            <a
              href={GOOGLE_RATING.profileUrl}
              target="_blank"
              rel="noopener"
              className="lg-text-link"
            >
              Read all {GOOGLE_RATING.count} reviews <ArrowUpRight size={17} />
            </a>
            <small>Rating checked {GOOGLE_RATING.checkedOn}</small>
          </div>
        </div>
        <div className="lg-reviews-heading">
          <h2 className="h2">Customer experiences</h2>
          <p>
            Selected reviews from Google. Visit our profile for the latest
            feedback.
          </p>
        </div>
        <div className="review-grid">
          {GOOGLE_REVIEWS.map((review) => (
            <GoogleReviewCard key={review.name} review={review} clamp={false} />
          ))}
        </div>
        <div className="lg-review-invite">
          <div>
            <h2 className="h2">Visited us recently?</h2>
            <p>
              We’d love to hear how it went. Your feedback helps the next person
              find their local repair shop.
            </p>
          </div>
          <a
            href={SITE.reviewHref}
            target="_blank"
            rel="noopener"
            className="lg-button lg-button-dark"
          >
            Share your experience on Google <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </Layout>
  );
}
