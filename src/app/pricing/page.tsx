import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 gradient-radial" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Affordable.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Flexible.
              </span>{" "}
              Effective.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Adaptive SAT prep for Math and Reading/Writing. No long-term commitment.
              Cancel anytime. Just {siteConfig.pricing.currency}{siteConfig.pricing.price}/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="#pricing">
                {siteConfig.cta.primary}
              </Button>
              <Button variant="outline" size="lg" href="/how-it-works">
                {siteConfig.cta.secondary}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Card */}
      <section id="pricing" className="py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-muted-foreground">
                One plan. Everything included. No hidden fees.
              </p>
            </div>
            <PricingCard />
          </div>
        </Container>
      </section>

      {/* Competitor Comparison */}
      <section className="py-24 bg-muted/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {siteConfig.competitorComparison.headline}
              </h2>
              <p className="text-xl text-muted-foreground">
                {siteConfig.competitorComparison.description}
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="rounded-2xl border border-border bg-background/50 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                        Comparison
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                        Traditional Prep
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                        RecallPrep
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {siteConfig.competitorComparison.dimensions.map((row, index) => (
                      <tr key={index} className="transition-colors hover:bg-muted/20">
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {row.traditional}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">
                          {row.recallprep}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Why RecallPrep is worth it
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Efficient use of study time
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You don't have hours to waste on SAT prep. RecallPrep's adaptive algorithm ensures every
                  minute is spent on what will actually improve your score—your weak areas—not what you've
                  already mastered.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Memory science, not guesswork
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spaced repetition and retrieval practice aren't trendy buzzwords—they're decades-old,
                  research-backed techniques proven to build long-term retention. RecallPrep automates what
                  top students do manually.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Affordable vs. traditional prep
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional SAT courses can cost $1,000–$3,000+ for multi-month programs with rigid
                  commitments. RecallPrep is just ${siteConfig.pricing.price}/month with no lock-in. Pay for
                  what you use, cancel when you're done.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Prevents forgetting
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  It's not enough to learn a topic once. RecallPrep brings back mastered topics as periodic
                  check-ins, ensuring you retain knowledge all the way to test day—no cramming required.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <Container size="narrow">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Pricing questions
            </h2>
          </div>

          <FAQ
            items={[
              {
                question: "Is there a contract or long-term commitment?",
                answer: `No. RecallPrep is month-to-month at ${siteConfig.pricing.currency}${siteConfig.pricing.price}. There are no long-term contracts, no hidden fees, and no cancellation penalties. You can cancel anytime from your account settings.`,
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes. You can cancel your subscription anytime, and you'll retain access through the end of your current billing period. No questions asked, no hassle.",
              },
              {
                question: "Is there an annual plan or discount?",
                answer: "Not currently. We're focused on keeping things simple and flexible with our monthly plan. If we introduce an annual option in the future, we'll notify all users.",
              },
              {
                question: `What's included in the ${siteConfig.pricing.currency}${siteConfig.pricing.price}/month plan?`,
                answer: "Everything. Unlimited adaptive study sessions, full SAT Math and Reading/Writing coverage, spaced repetition scheduling, mastery tracking, analytics, retention check-ins, and access on all devices (web, mobile, tablet).",
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! You can start a free trial to experience RecallPrep's adaptive study system before committing. No credit card required to start the trial.",
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 7-day money-back guarantee. If you're not satisfied within the first 7 days, contact us for a full refund.",
              },
              {
                question: "Are there any additional costs?",
                answer: `No. ${siteConfig.pricing.currency}${siteConfig.pricing.price}/month includes everything. There are no upsells, premium tiers, or extra charges for content or features.`,
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and debit cards. All transactions are securely processed.",
              },
            ]}
          />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-muted/50 to-secondary/10 p-12 md:p-16 text-center">
            <div className="absolute inset-0 gradient-glow opacity-30" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Start for ${siteConfig.pricing.price}/month
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                No long-term commitment • Cancel anytime
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Free trial available • No credit card required to start
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="#pricing">
                  {siteConfig.cta.primary}
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  {siteConfig.cta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
