import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Headphones,
  Mail,
  MessageSquare,
  Sheet,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/hero-automation.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kimon Kalousis — Workflow Automation for Customer Support" },
      {
        name: "description",
        content:
          "I build automated workflows that save businesses 4+ hours a week. Specialising in customer support automation with Google Sheets logging and Gmail alerts.",
      },
      {
        property: "og:title",
        content: "Kimon Kalousis — Workflow Automation for Customer Support",
      },
      {
        property: "og:description",
        content:
          "I build automated workflows that save businesses 4+ hours a week. Specialising in customer support automation with Google Sheets logging and Gmail alerts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const LINKTREE_URL = "https://linktr.ee/Kimon_Kalousis";

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Kimon Kalousis
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Connect
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-subtle px-4 py-1.5 text-sm font-medium text-sky">
                <Sparkles className="h-4 w-4" />
                Workflow Automation Specialist
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                I automate workflows so your team can focus on what matters.
              </h1>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I build smart, reliable automations for businesses — with a
                focus on customer support. My solutions have saved clients
                <span className="font-semibold text-foreground">
                  {" "}4+ hours every week
                </span>
                , cutting out repetitive manual work and response delays.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
                >
                  Get Built-For-You Workflows
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-card-foreground transition-all hover:bg-accent"
                >
                  See the customer support template
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-light/40 to-sky/20 blur-2xl" />
              <img
                src={heroImage}
                alt="Abstract illustration of connected automated workflows"
                width={1920}
                height={1080}
                className="relative rounded-2xl border border-border/50 shadow-2xl shadow-sky/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why businesses work with me
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Clock className="h-6 w-6" />}
              title="4+ hours saved weekly"
              description="My automations remove repetitive tasks, giving your team back hours every single week."
            />
            <ValueCard
              icon={<Headphones className="h-6 w-6" />}
              title="Customer support focus"
              description="I specialise in support workflows — ticket routing, feedback capture, alerts, and follow-ups."
            />
            <ValueCard
              icon={<Zap className="h-6 w-6" />}
              title="Fast to deploy"
              description="Clear, no-fluff automations built around your existing tools like Google Sheets and Gmail."
            />
          </div>
        </div>
      </section>

      {/* Workflow template detail */}
      <section id="workflow" className="bg-sky-subtle/50 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Customer feedback workflow template
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A ready-to-customise automation that captures customer feedback,
                organises it automatically, and makes sure urgent issues never
                slip through the cracks.
              </p>
              <ul className="space-y-4">
                <WorkflowStep
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Capture feedback automatically"
                  description="Feedback from forms, email, or chat is collected without manual copying."
                />
                <WorkflowStep
                  icon={<Sheet className="h-5 w-5" />}
                  title="Log everything to Google Sheets"
                  description="Every entry is timestamped, categorised, and stored in a clean spreadsheet."
                />
                <WorkflowStep
                  icon={<Mail className="h-5 w-5" />}
                  title="Gmail alerts for high-urgency feedback"
                  description="High-priority items trigger instant Gmail alerts so your team can act fast."
                />
              </ul>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
              >
                Request this template
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="glass-card rounded-3xl p-6 shadow-xl sm:p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-xl bg-sky-subtle p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-primary-foreground">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        New customer feedback received
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Source: support form
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Workflow className="h-6 w-6 text-sky" />
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-sky-subtle p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-primary-foreground">
                      <Sheet className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Logged to Google Sheets
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Categorised & timestamped
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Workflow className="h-6 w-6 text-sky" />
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-accent p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-primary-foreground">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        High urgency → Gmail alert sent
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Team notified immediately
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-2xl shadow-sky/25 sm:px-12">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky-light/40 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to stop doing repetitive work?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Let&apos;s build a custom automation for your business — plus
                get ongoing guidance and maintenance as you grow.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-white/90"
              >
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="text-sm text-primary-foreground/80">
                You can also find me on LinkedIn as <span className="font-semibold">Kalousis Kimon</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kimon Kalousis. Built for lead
            generation.
          </p>
          <p className="text-sm text-muted-foreground">
            Find me on LinkedIn as <span className="font-medium text-foreground">Kalousis Kimon</span>.
          </p>
        </div>
      </footer>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-subtle text-sky transition-colors group-hover:bg-sky group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function WorkflowStep({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky text-primary-foreground">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}
