import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Code,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";

import heroImage from "@/assets/hero-automation.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kimon Kalousis — 16, learning and building" },
      {
        name: "description",
        content:
          "I'm Kimon Kalousis, 16 years old, learning computer science and business and shipping projects as I go. Find me on LinkedIn and X as Kalousis Kimon.",
      },
      {
        property: "og:title",
        content: "Kimon Kalousis — 16, learning and building",
      },
      {
        property: "og:description",
        content:
          "I'm Kimon Kalousis, 16 years old, learning computer science and business and shipping projects as I go. Find me on LinkedIn and X as Kalousis Kimon.",
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

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Kimon Kalousis
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
                16 · learning &amp; building
              </div>
              <div className="rounded-2xl border border-sky/30 bg-sky-subtle/80 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-medium uppercase tracking-wide text-sky">
                  Find me on LinkedIn
                </p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Kalousis Kimon
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    16 years old
                  </span>{" "}
                  — learning computer science and business, and shipping real
                  projects as I go.
                </p>
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                I&apos;m 16 — learning, building, and shipping as I go.
              </h1>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I&apos;m learning computer science and business, and I learn
                best by building. Every project I finish teaches me something
                new — that&apos;s the whole point for me right now.
              </p>
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

      {/* What I'm up to */}
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I&apos;m up to
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Code className="h-6 w-6" />}
              title="Learning computer science"
              description="Programming, how software actually works, and building things from scratch instead of only following tutorials."
            />
            <ValueCard
              icon={<Briefcase className="h-6 w-6" />}
              title="Learning business"
              description="How businesses operate and what makes a product or service genuinely useful to someone."
            />
            <ValueCard
              icon={<Rocket className="h-6 w-6" />}
              title="Shipping projects"
              description="Turning what I learn into finished projects — small, real, and out in the world rather than left half done."
            />
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="px-4 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-2xl shadow-sky/25 sm:px-12">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky-light/40 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Just getting started
              </h2>
              <p className="text-lg text-primary-foreground/90">
                I&apos;m 16 and building my way through computer science and
                business, one project at a time.
              </p>
              <p className="text-sm text-primary-foreground/80">
                Find me on LinkedIn and X as{" "}
                <span className="font-semibold">Kalousis Kimon</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kimon Kalousis.
          </p>
          <p className="text-sm text-muted-foreground">
            Find me on LinkedIn and X as{" "}
            <span className="font-medium text-foreground">
              Kalousis Kimon
            </span>
            .
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
