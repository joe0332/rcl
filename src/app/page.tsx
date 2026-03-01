import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { MockupCard } from "@/components/MockupCard";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 gradient-radial" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Train recall.
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Raise your SAT score.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Master SAT Math and Reading/Writing with adaptive study sessions powered by spaced repetition.
                Your weaknesses appear more often. Your strengths fade out. Memory science, not busywork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" href={siteConfig.routes.signup}>
                  {siteConfig.cta.primary}
                </Button>
                <Button variant="outline" size="lg" href={siteConfig.routes.demo}>
                  {siteConfig.cta.secondary}
                </Button>
              </div>
            </div>

            {/* Hero Visual - Adaptive Mockups */}
            <div className="relative">
              <div className="space-y-4">
                <MockupCard
                  status="needs-review"
                  topic="Quadratic Functions"
                  detail="3 incorrect in last 5 attempts • Due today"
                />
                <MockupCard
                  status="mastered"
                  topic="Reading: Main Idea Questions"
                  detail="8/8 correct • Next check-in in 7 days"
                />
                <MockupCard
                  status="check-in"
                  topic="Systems of Equations"
                  detail="Last practiced 14 days ago • Retention check"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-muted/20 py-8">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{siteConfig.stats.studentsHelped}</p>
              <p className="text-sm text-muted-foreground">Students helped</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{siteConfig.stats.questionsAdaptive}</p>
              <p className="text-sm text-muted-foreground">Adaptive questions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{siteConfig.stats.averageImprovement}</p>
              <p className="text-sm text-muted-foreground">Avg. improvement</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why This is Different */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Stop studying what you already know
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional SAT prep wastes time on fixed sequences. RecallPrep adapts to your actual performance,
              targeting weak areas until mastery and preventing forgetting through smart check-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border/50 bg-muted/10 p-6">
              <div className="text-error mb-2 text-lg font-semibold">❌ Static Prep</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Same lessons for everyone</li>
                <li>• One diagnostic, no adaptation</li>
                <li>• Study what you've mastered</li>
                <li>• No forgetting prevention</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
              <div className="text-success mb-2 text-lg font-semibold">✓ RecallPrep</div>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Personalized to your gaps</li>
                <li>• Adapts after every question</li>
                <li>• Focus on what needs work</li>
                <li>• Scheduled retention checks</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Blocks */}
      <section className="py-24 bg-muted/20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Memory science meets SAT prep. Every question you answer makes your study plan smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Adaptive Spaced Repetition"
              description="Your study schedule updates in real-time. Weak topics appear more frequently until you've got them down."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Retrieval-Based Practice"
              description="Active recall, not passive review. Every answer is right or wrong—no self-rating, just real learning."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Weakness Targeting"
              description="Struggling with Systems of Equations? You'll see them daily until mastery. Then they fade to maintenance mode."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Forgetting Prevention"
              description="Mastered topics don't disappear forever. Periodic check-ins ensure retention all the way to test day."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              }
              title="Full SAT Coverage"
              description="All SAT Math topics and Reading/Writing skills. Mixed practice sessions keep you sharp across sections."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
              title="Continuous Recalibration"
              description="Your study plan evolves daily based on what you've learned and what you need to review."
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" href="/how-it-works">
              See the full process →
            </Button>
          </div>
        </Container>
      </section>

      {/* Outcomes Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Efficient study, measurable results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Students report improved confidence and stronger retention when studying with adaptive spaced repetition
              compared to traditional prep methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Efficiency-focused testimonial */}
            <TestimonialCard
              quote="RecallPrep focused my study time on exactly what I needed. No more wasting hours on stuff I already knew."
              author="Sarah M."
              role="High School Junior"
              improvement="140"
            />
            {/* Retention/test-day focused testimonial */}
            <TestimonialCard
              quote="The check-ins saved me. Topics I thought I'd mastered came back weeks later, and I caught what I'd forgotten before test day."
              author="Marcus T."
              role="High School Senior"
              improvement="110"
            />
            {/* Parent-focused testimonial */}
            <TestimonialCard
              quote="My son went from overwhelmed to consistent. He actually looks forward to his daily sessions now."
              author="Jennifer L."
              role="Parent"
            />
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <Container size="narrow">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
          </div>

          <FAQ
            items={[
              {
                question: "How does adaptive spaced repetition work?",
                answer: "Every time you answer a question, our algorithm updates your personalized study schedule. If you get a question wrong, that topic appears more frequently until you demonstrate mastery. Once mastered, it fades to periodic check-ins to prevent forgetting. This is based on decades of memory science research.",
              },
              {
                question: "What SAT content does RecallPrep cover?",
                answer: "RecallPrep covers all SAT Math topics (Algebra, Advanced Math, Problem-Solving, Geometry) and all Reading & Writing skills (comprehension, vocabulary, grammar, rhetoric). You'll get mixed practice sessions that keep you sharp across both sections.",
              },
              {
                question: "How is this different from Khan Academy or practice books?",
                answer: "Khan Academy and books use fixed lesson sequences—everyone follows the same path. RecallPrep adapts in real-time to your performance. If you're weak in quadratic functions but strong in linear equations, you'll see more quadratics. Plus, we use retrieval practice (active recall) instead of passive video lessons.",
              },
              {
                question: "How much time should I spend studying per day?",
                answer: "We recommend 20-30 minutes daily. Consistency beats cramming. The adaptive algorithm works best with regular practice, and spaced repetition is designed for distributed study over time.",
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! Sign up to start your free trial and experience adaptive SAT prep for yourself. No credit card required to start.",
              },
              {
                question: "Can I use this on my phone?",
                answer: "Absolutely. RecallPrep is a web app that works on any device—desktop, tablet, or mobile. Study anywhere, and your progress syncs automatically.",
              },
            ]}
          />
        </Container>
      </section>

      {/* Final CTA */}
      <section id="start" className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-muted/50 to-secondary/10 p-12 md:p-16 text-center">
            <div className="absolute inset-0 gradient-glow opacity-30" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ready to study smarter?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your free trial today. No credit card required. Cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="#start">
                  {siteConfig.cta.primary}
                </Button>
                <Button variant="outline" size="lg" href="/pricing">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
