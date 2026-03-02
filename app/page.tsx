export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-4">
          <span className="serif text-lg font-normal tracking-tight text-ink">
            Adab Studio
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[960px] px-6 pt-24 pb-20">
        <h1 className="text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          <span className="italic text-accent">Right time.</span>{" "}
          <span className="italic text-accent">Right place.</span>{" "}
          <span className="italic text-accent">Right thing.</span>
        </h1>
        <div className="mt-8 max-w-[640px] space-y-4 text-lg leading-relaxed text-muted">
          <p>
            Adab is an Arabic word for the art of doing what the moment asks.
            Not politeness — attentiveness. The right action depends on who is
            present, what is at stake, and what the situation actually needs.
          </p>
          <p>
            Adab Studio builds technology that practices this kind of attention.
            Software that reads context before it acts. AI that knows the
            difference between what it can say and what it should.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[960px] px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
            Philosophy
          </p>
          <h2 className="mt-3 text-2xl tracking-tight text-ink sm:text-3xl">
            What adab means
          </h2>
          <div className="mt-6 max-w-[640px] space-y-4 text-base leading-relaxed text-muted">
            <p>
              In the Arabic literary tradition, adab originally meant the
              cultivation of refined conduct — the knowledge of how to act well
              in any situation. In Sufi thought it deepened: adab became the
              practice of presence, of reading a room before speaking into it.
              Not etiquette, but awareness. Not rules, but responsiveness.
            </p>
            <p>
              We think this is exactly what&apos;s missing from most technology.
              Every AI interaction has a context — a person, a power dynamic, a
              set of stakes. The right response is never just the most capable
              one. It&apos;s the one that fits.
            </p>
          </div>

          <div className="mt-12 grid gap-px sm:grid-cols-3">
            {[
              {
                line: "The right thing depends on who's in the room",
                note: "Context before capability",
              },
              {
                line: "Transparency is relational — what to reveal depends on the relationship",
                note: "Trust before disclosure",
              },
              {
                line: "Technology should be attentive, not just intelligent",
                note: "Presence before performance",
              },
            ].map((item) => (
              <div
                key={item.line}
                className="border-l-2 border-accent/30 py-4 pl-5"
              >
                <p className="serif text-base italic leading-snug text-ink">
                  {item.line}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[960px] px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
            Projects
          </p>
          <h2 className="mt-3 text-2xl tracking-tight text-ink sm:text-3xl">
            Two expressions of the same idea
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Sourced */}
            <a
              href="https://sourced.adab.studio"
              className="panel group block no-underline"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl tracking-tight text-ink">Sourced</h3>
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Active
                </span>
              </div>
              <p className="serif mt-1 text-sm italic text-accent">
                A protocol for honest AI
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Makes AI&apos;s internal models of people visible, correctable,
                and portable. What the system thinks it knows about you should
                never be hidden from you.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Visit
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="translate-x-0 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 6h8M7 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* Cursive */}
            <a
              href="https://cursive.adab.studio"
              className="panel group block no-underline"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl tracking-tight text-ink">Cursive</h3>
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Active
                </span>
              </div>
              <p className="serif mt-1 text-sm italic text-accent">
                Writing that listens
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A conversational writing tool powered by Sourced&apos;s
                listening layer. It doesn&apos;t write for you — it helps you
                hear what you&apos;re already trying to say.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Visit
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="translate-x-0 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 6h8M7 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-8 text-xs text-muted">
          <span className="serif text-sm text-ink">Adab Studio</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
