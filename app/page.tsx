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
      <section className="mx-auto max-w-[960px] px-6 pt-12 pb-10">
        <h1 className="text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          <span className="italic text-accent">Right time.</span>{" "}
          <span className="italic text-accent">Right place.</span>{" "}
          <span className="italic text-accent">Right thing.</span>
        </h1>
        <div className="mt-5 max-w-[640px] space-y-3 text-lg leading-relaxed text-muted">
          <p>
            Adab is an Arabic word that roughly means knowing what a situation
            asks of you. Not politeness — something closer to attentiveness. The
            right action depends on who&apos;s there, what&apos;s at stake, what
            the moment actually needs.
          </p>
          <p>
            We build tools that try to practice this. Software that reads the
            room before it speaks. AI that cares about the difference between
            what it can do and what it should.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[960px] px-6 py-12">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
            Projects
          </p>
          <h2 className="mt-3 text-2xl tracking-tight text-ink sm:text-3xl">
            What we&apos;re building
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
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
                When AI builds a model of who you are, you should be able to see
                it, correct it, and take it with you. Sourced makes that model
                visible — so the system is honest about what it thinks it knows.
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
              href="https://cursivegpt.com"
              className="panel group block no-underline"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl tracking-tight text-ink">Cursive</h3>
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Active
                </span>
              </div>
              <p className="serif mt-1 text-sm italic text-accent">
                AI that requires you
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Most AI writes for you. Cursive keeps you in the process —
                seven thinking tools that question, challenge, and reframe your
                work, but never take the pen. A bicycle for the mind, not a
                self-driving car.
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

            {/* Versed */}
            <div className="panel block">
              <div className="flex items-start justify-between">
                <h3 className="text-xl tracking-tight text-ink">Versed</h3>
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Active
                </span>
              </div>
              <p className="serif mt-1 text-sm italic text-accent">
                A bilingual reader
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Hear a paragraph in Arabic, then rewind and hear it in English —
                back and forth until the meaning lands. Transliterations are
                pronounced the way they&apos;re meant to sound, not anglicized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[960px] px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
            Philosophy
          </p>
          <h2 className="mt-3 text-2xl tracking-tight text-ink sm:text-3xl">
            Where the word comes from
          </h2>
          <div className="mt-6 max-w-[640px] space-y-4 text-base leading-relaxed text-muted">
            <p>
              In Arabic literary tradition, adab meant something like the
              cultivation of good conduct — knowing how to act well in a given
              situation. In Sufi thought the idea deepened: adab became the
              practice of presence. Reading a room before you speak into it.
              Not etiquette. Awareness.
            </p>
            <p>
              Most software doesn&apos;t do this. It treats every person the
              same, every context the same, every interaction as a chance to be
              maximally helpful. But the right response actually depends on the
              relationship — who&apos;s asking, what they need, what power
              dynamics are in play. We think that&apos;s worth building for.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                line: "Every interaction has a context that shapes what the right response is",
              },
              {
                line: "What to share and what to hold back depends on the relationship, not a global setting",
              },
              {
                line: "The goal isn\u2019t to be maximally capable — it\u2019s to be appropriate to the moment",
              },
            ].map((item) => (
              <div
                key={item.line}
                className="border-l-2 border-accent/20 py-3 pl-5"
              >
                <p className="text-sm leading-snug text-ink">{item.line}</p>
              </div>
            ))}
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
