import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mountains.jpg";
import studioImg from "@/assets/studio.jpg";
import climberImg from "@/assets/climber.jpg";
import valleyImg from "@/assets/valley.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Akina Studio — Software Engineering for Ambitious Teams" },
      {
        name: "description",
        content:
          "Akina Studio is a software agency building refined web platforms, mobile products, cloud systems and AI features for teams that care about craft.",
      },
      { property: "og:title", content: "Akina Studio — Software Engineering for Ambitious Teams" },
      {
        property: "og:description",
        content:
          "Refined web platforms, mobile products, cloud systems and AI features, engineered end to end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  {
    n: "01",
    title: "Product Engineering",
    body: "Web platforms built on React and TypeScript — fast, accessible, and made to scale with your roadmap.",
  },
  {
    n: "02",
    title: "Mobile Applications",
    body: "Native-feeling iOS and Android products, shipped from one codebase with no compromise on polish.",
  },
  {
    n: "03",
    title: "Cloud & Infrastructure",
    body: "Resilient APIs, data pipelines and deployment pipelines that stay quiet while your business grows.",
  },
  {
    n: "04",
    title: "AI Integration",
    body: "Assistants, search and automation woven into your product where they genuinely remove work.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Snow-capped mountain range at twilight above a valley of city lights"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/20 to-foreground/55" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 py-6 sm:px-8">
          <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
            <span className="font-display text-lg tracking-[0.4em] text-foreground">AKINA</span>
            <div className="hidden items-center gap-9 text-sm text-foreground/75 md:flex">
              <a href="#services" className="transition-colors hover:text-foreground">
                Services
              </a>
              <a href="#studio" className="transition-colors hover:text-foreground">
                Studio
              </a>
              <a href="#work" className="transition-colors hover:text-foreground">
                Work
              </a>
            </div>
            <a
              href="#contact"
              className="glass-soft rounded-full px-4 py-2 text-xs tracking-widest text-foreground uppercase transition-colors hover:bg-primary/10"
            >
              Contact
            </a>
          </nav>

          <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
            <p className="eyebrow rise">Software Agency · Est. 2016</p>
            <h1 className="rise mt-6 max-w-4xl text-5xl leading-[1.05] text-frost sm:text-7xl md:text-8xl">
              <span className="text-aurora">Software built</span>
              <br />
              with altitude.
            </h1>
            <p className="rise mt-7 max-w-xl text-base leading-relaxed text-frost/80">
              We design and engineer digital products for companies that treat software as
              craft — from first architecture sketch to the release that carries your revenue.
            </p>
            <div className="rise mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-frost px-7 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a project
              </a>
              <a
                href="#services"
                className="glass rounded-full px-7 py-3 text-sm text-foreground transition-transform hover:-translate-y-0.5"
              >
                View services
              </a>
            </div>
          </div>

          <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
            {[
              ["120+", "Products shipped"],
              ["9 yrs", "Average client tenure"],
              ["24", "Engineers & designers"],
              ["4 wks", "To first release"],
            ].map(([k, v]) => (
              <div key={v} className="px-6 py-6 text-center">
                <p className="font-display text-3xl text-foreground">{k}</p>
                <p className="mt-1 text-xs tracking-wider text-foreground/60 uppercase">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">
          Four disciplines, one engineering standard.
        </h2>
        <div className="hairline mt-12" />
        <div className="grid gap-px md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.n}
              className="group border-b border-border p-8 transition-colors hover:bg-secondary/40 md:odd:border-r"
            >
              <span className="font-display text-sm text-primary">{s.n}</span>
              <h3 className="mt-4 text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={studioImg}
              alt="Minimalist studio workspace at dusk with violet light"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">The studio</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              A small team, deliberately.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Akina is twenty-four engineers, designers and product leads working in one
              room. No hand-offs to junior benches, no account layer between you and the
              people writing the code. You get senior attention on every commit.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We work in six-week cycles with a demo at the end of each one, so you always
              see the product before you see the invoice.
            </p>
            <div className="hairline my-8" />
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node", "Postgres", "AWS", "Swift"].map((t) => (
                <span
                  key={t}
                  className="glass-soft rounded-full px-4 py-1.5 text-xs tracking-wide text-foreground/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <div className="glass overflow-hidden rounded-[2rem] md:grid md:grid-cols-2">
          <div className="p-9 sm:p-12">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Summit — a logistics platform moving 40,000 shipments a day.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-frost/70">
              We rebuilt a fifteen-year-old operations suite into a single real-time
              platform. Dispatch time fell by 38%, and the team onboards new depots in an
              afternoon instead of a quarter.
            </p>
            <div className="mt-8 flex gap-10">
              <div>
                <p className="font-display text-3xl text-frost">38%</p>
                <p className="text-xs tracking-wider text-frost/60 uppercase">Faster dispatch</p>
              </div>
              <div>
                <p className="font-display text-3xl text-frost">99.98%</p>
                <p className="text-xs tracking-wider text-frost/60 uppercase">Uptime</p>
              </div>
            </div>
          </div>
          <img
            src={climberImg}
            alt="Climber standing on a snowy ridge at sunrise"
            width={1200}
            height={912}
            loading="lazy"
            className="h-full min-h-[300px] w-full object-cover"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden">
        <img
          src={valleyImg}
          alt="Alpine valley town glowing at blue hour"
          width={1920}
          height={1008}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80" />
        <div className="relative mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
          <p className="eyebrow">Start here</p>
          <h2 className="mt-5 text-4xl sm:text-6xl">
            Tell us what you're <span className="text-aurora">building.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-frost/75">
            Send a short brief and we'll reply within two working days with a first read on
            scope, timeline and team.
          </p>
          <form
            className="glass mx-auto mt-10 flex max-w-md flex-col gap-3 rounded-3xl p-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
              className="flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-frost placeholder:text-frost/45 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-frost px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </button>
          </form>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <div className="hairline mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <span className="font-display text-base tracking-[0.4em] text-frost">AKINA</span>
          <p>© {new Date().getFullYear()} Akina Studio. Software engineering.</p>
        </div>
      </footer>
    </main>
  );
}
