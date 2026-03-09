import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";
import { TrustBar } from "@/components/TrustBar";

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
              <Button variant="primary" size="lg" href={siteConfig.routes.signup}>
                {siteConfig.cta.primary}
              </Button>
              <Button variant="outline" size="lg" href={siteConfig.routes.demo}>
                {siteConfig.cta.secondary}
              </Button>
            </div>

            {/* Trust Bar - Compact */}
            <TrustBar variant="compact" />
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
                        Recall Labs
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

      {/* Tutor Comparison */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Recall Labs vs. Private Tutoring
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {siteConfig.tutorComparison.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Private Tutor */}
              <div className="rounded-2xl border border-border/50 bg-muted/10 p-8">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Private SAT Tutor
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-lg font-semibold text-foreground">
                    {siteConfig.tutorComparison.tutorCost}
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Hourly billing adds up quickly</li>
                    <li>• Scheduling can be inflexible</li>
                    <li>• Cost varies by market and experience</li>
                    <li>• Limited session frequency</li>
                  </ul>
                </div>
              </div>

              {/* Recall Labs */}
              <div className="rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Recall Labs
                </h3>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-primary">
                    {siteConfig.tutorComparison.recallprepValue}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>✓ Predictable monthly cost</li>
                    <li>✓ Study anytime, anywhere</li>
                    <li>✓ Unlimited daily sessions</li>
                    <li>✓ Adapts to your exact needs</li>
                  </ul>
                </div>
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
              Why students choose Recall Labs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Study time efficiency
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The adaptive algorithm focuses every session on your weak areas, not what you've
                  already mastered. Make real progress in 20-30 minutes daily.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Proven memory science
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spaced repetition and retrieval practice are research-backed techniques that build
                  long-term retention better than cramming or passive review.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Retention check-ins
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mastered topics return as periodic check-ins to prevent forgetting. Retain
                  knowledge all the way to test day without last-minute cramming.
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
                answer: `No. Recall Labs is month-to-month at ${siteConfig.pricing.currency}${siteConfig.pricing.price}. There are no long-term contracts, no hidden fees, and no cancellation penalties. You can cancel anytime from your account settings.`,
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes. You can cancel your subscription anytime, and you'll retain access through the end of your current billing period. No questions asked, no hassle.",
              },
              {
                question: `What's included in the ${siteConfig.pricing.currency}${siteConfig.pricing.price}/month plan?`,
                answer: "Everything. Unlimited adaptive study sessions, full SAT Math and Reading/Writing coverage, spaced repetition scheduling, mastery tracking, analytics, retention check-ins, and access on all devices (web, mobile, tablet).",
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! You can start a 7-day free trial to experience Recall Labs's adaptive study system before committing. No credit card required to start the trial.",
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 7-day money-back guarantee. If you're not satisfied within the first 7 days, contact us for a full refund.",
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
                7-day free trial available • No credit card required to start
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href={siteConfig.routes.signup}>
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
