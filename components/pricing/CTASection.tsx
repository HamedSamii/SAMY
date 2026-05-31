import Link from "next/link";

export function CTASection() {
  return (
    <div className="cta-section">
      <div className="cta-glow-1" aria-hidden />
      <div className="cta-glow-2" aria-hidden />
      <h2>
        Ready to automate
        <br />
        your business?
      </h2>
      <p>Join hundreds of businesses across the Gulf using Samy.</p>
      <div className="cta-btns">
        <Link
          href="https://app.samy.agency/register"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn-primary"
        >
          Start Free Trial — 14 Days
        </Link>
        <Link href="/contact" className="cta-btn-outline">
          Book a Demo
        </Link>
      </div>
      <div className="social-proof">
        <span className="stars">★★★★★</span>
        {" "}
        Trusted by 200+ businesses in KSA, UAE &amp; Egypt
      </div>
    </div>
  );
}
