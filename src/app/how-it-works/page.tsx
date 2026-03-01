import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ComparisonTable } from "@/components/ComparisonTable";
import { AdaptiveLearningLoop } from "@/components/AdaptiveLearningLoop";

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 gradient-radial" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              How{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                RecallPrep
              </span>{" "}
              works
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Seven steps to smarter SAT prep, powered by adaptive spaced repetition and retrieval practice.
            </p>
          </div>
        </Container>
      </section>

      {/* The Process: 7 Steps */}
      <section className="py-24">
        <Container>
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Diagnostic + Baseline
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You start with a quick diagnostic covering SAT Math and Reading/Writing fundamentals.
                  We identify your current strengths and gaps across all tested topics. This baseline
                  informs your initial study plan—but unlike traditional prep, the plan keeps evolving.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Algebra</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-success w-4/5" />
                      </div>
                      <span className="text-foreground font-semibold">80%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Geometry</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-warning w-2/5" />
                      </div>
                      <span className="text-foreground font-semibold">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Reading Comp</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-success w-full" />
                      </div>
                      <span className="text-foreground font-semibold">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl border border-border bg-muted/30 p-8">
                <h4 className="font-semibold text-foreground mb-4">Your personalized study map</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-error mr-3" />
                    High priority: Geometry, Systems of Equations
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-warning mr-3" />
                    Medium priority: Polynomial functions, Grammar rules
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-success mr-3" />
                    Maintenance: Algebra, Reading comprehension
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Personalized Study Map
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based on your diagnostic, we generate a customized study schedule. Topics you struggled
                  with get high priority. Topics you've mastered go into maintenance mode. This isn't
                  static—it updates continuously as you practice.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Daily Mixed SAT Sessions
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each day, you get a custom practice session mixing Math and Reading/Writing questions.
                  The algorithm serves up problems based on what you need most: weak areas appear frequently,
                  mastered topics show up periodically. No two days are the same.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <p className="text-sm text-muted-foreground mb-4">Today's session (20 questions)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Geometry</span>
                    <span className="text-muted-foreground">6 questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Systems of Equations</span>
                    <span className="text-muted-foreground">4 questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Reading: Evidence</span>
                    <span className="text-muted-foreground">5 questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Grammar: Transitions</span>
                    <span className="text-muted-foreground">3 questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Algebra (check-in)</span>
                    <span className="text-muted-foreground">2 questions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-center space-y-4">
                  <div className="text-5xl">✓</div>
                  <p className="text-lg font-semibold text-success">Correct</p>
                  <div className="text-5xl">✗</div>
                  <p className="text-lg font-semibold text-error">Incorrect</p>
                  <p className="text-sm text-muted-foreground italic">
                    No self-rating. No "I think I know this." Just facts.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Real Answer Evaluation
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every question you answer is either right or wrong. No confidence sliders, no self-assessment.
                  This is retrieval practice—you're actively recalling information, which research shows is the
                  most effective way to build long-term memory.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-4">
                  5
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Dynamic Scheduling Updates
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  After every answer, the algorithm updates. Got a geometry question wrong? You'll see more
                  geometry sooner. Nailed all your Systems of Equations? They'll appear less frequently and
                  eventually move to periodic check-ins. Your study plan is always optimizing.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-error/20 flex items-center justify-center text-error font-bold text-sm mt-1">
                      ↑
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-foreground">Geometry moved to daily review</p>
                      <p className="text-xs text-muted-foreground">2 incorrect in last session</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-sm mt-1">
                      ↓
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-foreground">Algebra moved to maintenance</p>
                      <p className="text-xs text-muted-foreground">5/5 correct streak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl border border-border bg-muted/30 p-8">
                <h4 className="font-semibold text-foreground mb-4">Mastered topics don't disappear</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Linear Equations</span>
                    <span className="text-success">Next check-in: 7 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Reading: Vocab</span>
                    <span className="text-success">Next check-in: 5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Grammar: Commas</span>
                    <span className="text-warning">Check-in overdue</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-4">
                  6
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Mastery Fade + Retention Checks
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Once you've mastered a topic, it doesn't vanish. It fades into the background, but comes
                  back as scheduled check-ins to prevent forgetting. This is spaced repetition: reviewing
                  information at increasing intervals to lock it into long-term memory.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-4">
                  7
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Continuous Recalibration Until Test Day
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From day one to test day, your study plan is recalibrating. New gaps emerge? We address them.
                  Old weaknesses become strengths? We move them to maintenance. The result: efficient use of your
                  limited study time, focusing on what actually matters for your score.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Your progress compounds
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Week over week, your mastered topics grow while weak areas shrink.
                    The algorithm ensures you're always working on the highest-impact content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Science Behind It */}
      <section className="py-24 bg-muted/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              The science behind it
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Spaced repetition</strong> is one of the most well-researched
                learning techniques. Instead of cramming information all at once, you review it at increasing
                intervals (1 day, 3 days, 7 days, 14 days, etc.). This pattern aligns with how memory consolidation
                works in the brain, dramatically improving long-term retention.
              </p>
              <p>
                <strong className="text-foreground">Retrieval practice</strong> (also called active recall) means
                actively pulling information from memory rather than passively rereading notes or watching videos.
                Research consistently shows that retrieval practice produces stronger, more durable learning than
                passive review methods.
              </p>
              <p>
                RecallPrep combines both techniques. You're actively recalling SAT concepts (retrieval practice),
                and the algorithm spaces out reviews based on your performance (spaced repetition). Together, they
                create a powerful, evidence-based system for efficient SAT preparation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              How RecallPrep compares
            </h2>
            <ComparisonTable
              rows={[
                {
                  feature: "Study approach",
                  traditional: "Fixed lesson sequence",
                  recallprep: "Adaptive spaced repetition",
                },
                {
                  feature: "Personalization",
                  traditional: "One-time diagnostic",
                  recallprep: "Updates after every question",
                },
                {
                  feature: "Learning method",
                  traditional: "Passive review (videos, notes)",
                  recallprep: "Active retrieval practice",
                },
                {
                  feature: "Weak area targeting",
                  traditional: "Manual self-selection",
                  recallprep: "Automatic algorithm-driven",
                },
                {
                  feature: "Forgetting prevention",
                  traditional: "None (study once, hope it sticks)",
                  recallprep: "Scheduled retention check-ins",
                },
                {
                  feature: "Time efficiency",
                  traditional: "Study everything equally",
                  recallprep: "Focus on highest-impact topics",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* What Your Week Looks Like */}
      <section className="py-24 bg-muted/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              What your week looks like
            </h2>
            <div className="space-y-6">
              {[
                {
                  day: "Monday",
                  focus: "Mixed session: Geometry (weak), Reading Comp (maintenance), Grammar (check-in)",
                  duration: "25 min",
                },
                {
                  day: "Tuesday",
                  focus: "Mixed session: Geometry (weak), Systems of Equations (weak), Vocab (new)",
                  duration: "20 min",
                },
                {
                  day: "Wednesday",
                  focus: "Mixed session: Advanced Math (weak), Reading Evidence (check-in), Geometry (weak)",
                  duration: "30 min",
                },
                {
                  day: "Thursday",
                  focus: "Mixed session: Systems of Equations (improving), Grammar Transitions (check-in)",
                  duration: "20 min",
                },
                {
                  day: "Friday",
                  focus: "Mixed session: Geometry (check-in), Polynomial Functions (weak), Reading Main Idea",
                  duration: "25 min",
                },
                {
                  day: "Saturday",
                  focus: "Extended practice: All recent weak areas + periodic maintenance checks",
                  duration: "45 min",
                },
                {
                  day: "Sunday",
                  focus: "Light review: Retention check-ins only (mastered topics)",
                  duration: "15 min",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl border border-border bg-muted/30 p-6 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center mb-2 md:mb-0">
                    <div className="flex-shrink-0 w-24">
                      <span className="text-lg font-semibold text-foreground">{item.day}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.focus}</p>
                  </div>
                  <div className="flex-shrink-0 ml-24 md:ml-0">
                    <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              Your actual schedule will be unique to your performance and learning pace.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-muted/50 to-secondary/10 p-12 md:p-16 text-center">
            <div className="absolute inset-0 gradient-glow opacity-30" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Experience adaptive learning
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop wasting time on what you already know. Start focusing on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="/#start">
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
