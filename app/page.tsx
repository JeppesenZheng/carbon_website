import {
  ArrowDownToLine,
  ArrowRight,
  Braces,
  Database,
  ExternalLink,
  FileCheck2,
  GitBranch,
  Layers3,
  Scale,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/asset-path";

const datasets = [
  {
    id: "01",
    anchor: "scope3trace",
    name: "Scope3Trace",
    category: "Value-chain trace data",
    summary:
      "A structured dataset for studying how Scope 3 emissions claims connect to activities, suppliers, and underlying evidence.",
    purposes: ["Traceability", "Entity linking", "Evidence retrieval"],
    accent: "lime",
    metadata: "/data/scope3trace.json",
    paper: "https://arxiv.org/abs/2607.17122",
  },
  {
    id: "02",
    anchor: "ghgbench",
    name: "GHGBench",
    category: "Evaluation benchmark",
    summary:
      "A benchmark dataset for evaluating models and systems that work with greenhouse-gas disclosures, calculations, and reporting tasks.",
    purposes: ["Model evaluation", "Structured extraction", "Reproducibility"],
    accent: "blue",
    metadata: "/data/ghgbench.json",
    paper: "https://arxiv.org/abs/2605.13743",
  },
] as const;

const releaseRows = [
  ["Version", "Semantic release tag", "Planned"],
  ["Documentation", "Dataset card + field guide", "In preparation"],
  ["Data package", "Validated research files", "In preparation"],
  ["Citation", "Stable reference record", "In preparation"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1f33]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#63d7e6]"
            aria-label="Carbon Data Hub home"
          >
            <span className="grid size-9 place-items-center rounded-full border border-[#63d7e6]/35 bg-[#63d7e6] text-[11px] font-black tracking-[-0.08em] text-[#0b1f33] transition-transform group-hover:rotate-6">
              CO₂
            </span>
            <span className="flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                Carbon Data Hub
              </span>
              <span className="hidden h-4 w-px bg-white/20 xl:block" aria-hidden="true" />
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.12em] text-white/45 xl:block">
                by Data Cruiser
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-white" href="#datasets">
              Datasets
            </a>
            <a className="transition-colors hover:text-white" href="#release-framework">
              Release framework
            </a>
            <a className="transition-colors hover:text-white" href="#about">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-white/55 sm:flex">
              <span className="size-1.5 rounded-full bg-[#63d7e6] shadow-[0_0_12px_#63d7e6]" />
              Research preview
            </span>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 rounded-full border-white/20 bg-white/5 px-4 text-white shadow-none hover:border-[#63d7e6]/55 hover:bg-[#63d7e6] hover:text-[#0b1f33]"
            >
              <a href={assetPath("/data/catalog.json")} download>
                <ArrowDownToLine aria-hidden="true" />
                Catalog
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section id="top" className="relative bg-[#0b1f33] text-white">
        <div className="carbon-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#63d7e6]">
              <span className="h-px w-10 bg-[#63d7e6]" />
              Data Cruiser / Open carbon research
            </div>
            <h1 className="max-w-4xl text-[clamp(3.2rem,7.2vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Evidence for
              <span className="block text-[#63d7e6]">credible carbon.</span>
            </h1>
            <div className="mt-9 flex max-w-3xl flex-col gap-7 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-base leading-7 text-white/63 sm:text-lg sm:leading-8">
                A focused home for two research datasets built to make value-chain emissions work more traceable, comparable, and reproducible.
              </p>
              <Button
                asChild
                size="lg"
                className="h-12 self-start rounded-full bg-[#63d7e6] px-6 font-semibold text-[#0b1f33] hover:bg-[#a8edf3] sm:self-auto"
              >
                <a href="#datasets">
                  Explore the datasets
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          <aside className="self-end border border-white/15 bg-white/[0.035] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-7" aria-label="Data pipeline overview">
            <div className="mb-9 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Evidence chain</span>
              <span className="font-mono text-xs text-[#63d7e6]">2 DATASETS / 1 HUB</span>
            </div>
            <div className="space-y-2">
              {["Source records", "Structured evidence", "Comparable tasks", "Research outcomes"].map((label, index) => (
                <div key={label} className="group grid grid-cols-[34px_1fr_auto] items-center gap-4 border-t border-white/10 py-3.5 first:border-[#63d7e6]/60">
                  <span className="font-mono text-xs text-white/35">0{index + 1}</span>
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">{label}</span>
                  <span className={`h-1.5 rounded-full ${index === 0 ? "w-11 bg-[#63d7e6]" : index === 1 ? "w-8 bg-[#a8c8ff]" : index === 2 ? "w-6 bg-white/45" : "w-3 bg-white/25"}`} />
                </div>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-3 gap-2">
              {["Scope 1", "Scope 2", "Scope 3"].map((scope, index) => (
                <div key={scope} className={`border px-3 py-3 text-center font-mono text-[11px] uppercase tracking-wider ${index === 2 ? "border-[#63d7e6]/70 bg-[#63d7e6]/10 text-[#63d7e6]" : "border-white/10 text-white/35"}`}>
                  {scope}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="datasets" className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 border-b border-black/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/45">Dataset catalog / 02 records</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Two datasets. One evidence layer.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-black/55">Each listing is structured around a clear research purpose, release status, and machine-readable metadata record.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {datasets.map((dataset) => (
            <article
              key={dataset.id}
              className="dataset-card group relative flex min-h-[470px] flex-col overflow-hidden border border-black/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(20,28,23,0.12)] sm:p-9"
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${dataset.accent === "lime" ? "bg-[#35c9b3]" : "bg-[#6ea8fe]"}`} />
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-black/45">
                  <Database className="size-4" aria-hidden="true" />
                  Dataset {dataset.id}
                </div>
                <span className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-medium text-black/55">Pre-release</span>
              </div>

              <div className="mt-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-black/45">{dataset.category}</p>
                <h3 className="text-[clamp(2.8rem,5vw,5.25rem)] font-semibold leading-none tracking-[-0.065em]">{dataset.name}</h3>
                <p className="mt-7 max-w-xl text-base leading-7 text-black/58 sm:text-lg sm:leading-8">{dataset.summary}</p>
              </div>

              <div className="mt-auto pt-10">
                <div className="mb-8 flex flex-wrap gap-2">
                  {dataset.purposes.map((purpose) => (
                    <span key={purpose} className="rounded-full bg-[#eaf1f6] px-3 py-2 text-xs font-medium text-black/65">{purpose}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
                  <Button asChild variant="link" className="h-auto p-0 text-sm font-semibold text-black no-underline hover:no-underline">
                    <a href={`#${dataset.anchor}`}>
                      View dataset record
                      <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </Button>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" className="rounded-full border-black/20 bg-transparent px-4 shadow-none hover:border-black hover:bg-black hover:text-white">
                      <a href={dataset.paper} target="_blank" rel="noreferrer">
                        arXiv paper
                        <ExternalLink aria-hidden="true" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border-black/20 bg-transparent px-4 shadow-none hover:border-black hover:bg-black hover:text-white">
                      <a href={assetPath(dataset.metadata)} download>
                        <Braces aria-hidden="true" />
                        Metadata JSON
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8f0f5]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/45">Research questions</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">What the data is designed to answer.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-black/55 lg:justify-self-end">The hub separates trace data from evaluation data so researchers can move from source evidence to measurable system performance without blurring the two.</p>
          </div>

          <div className="grid border border-black/15 bg-white lg:grid-cols-2">
            <article id="scope3trace" className="scroll-mt-24 p-6 sm:p-9 lg:border-r lg:border-black/15">
              <div className="mb-8 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#63d7e6] text-[#0b1f33]"><GitBranch className="size-5" aria-hidden="true" /></span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-black/40">Trace layer</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">Scope3Trace</h3>
                </div>
              </div>
              <ul className="space-y-0">
                {["How are value-chain emissions claims linked to evidence?", "Which entities and activities appear in the trace?", "Can each record be followed back to its source context?"].map((question, index) => (
                  <li key={question} className="grid grid-cols-[32px_1fr] gap-3 border-t border-black/10 py-4 text-[15px] leading-6 text-black/70">
                    <span className="font-mono text-xs text-black/35">0{index + 1}</span>{question}
                  </li>
                ))}
              </ul>
            </article>

            <article id="ghgbench" className="scroll-mt-24 border-t border-black/15 p-6 sm:p-9 lg:border-t-0">
              <div className="mb-8 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#bbd7ff] text-[#0b1f33]"><Scale className="size-5" aria-hidden="true" /></span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-black/40">Evaluation layer</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">GHGBench</h3>
                </div>
              </div>
              <ul className="space-y-0">
                {["How reliably can a system interpret GHG information?", "Can results be compared across shared evaluation tasks?", "Are benchmark outcomes documented and repeatable?"].map((question, index) => (
                  <li key={question} className="grid grid-cols-[32px_1fr] gap-3 border-t border-black/10 py-4 text-[15px] leading-6 text-black/70">
                    <span className="font-mono text-xs text-black/35">0{index + 1}</span>{question}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="release-framework" className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/45">Release framework</p>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Built for responsible release.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-black/55">The first public data packages will pair files with the context needed to understand, reproduce, and cite the work.</p>
          </div>

          <div className="border-t border-black/20">
            {releaseRows.map(([item, detail, status], index) => (
              <div key={item} className="grid gap-2 border-b border-black/10 py-5 sm:grid-cols-[40px_0.8fr_1.3fr_auto] sm:items-center sm:gap-5">
                <span className="hidden font-mono text-xs text-black/30 sm:block">0{index + 1}</span>
                <span className="font-semibold">{item}</span>
                <span className="text-sm text-black/50">{detail}</span>
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.09em] text-black/45">
                  <span className="size-1.5 rounded-full bg-[#c58b2a]" />{status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
          {[
            [FileCheck2, "Documented", "Clear dataset cards, field definitions, and known limitations."],
            [Layers3, "Versioned", "Stable releases that make research results easier to reproduce."],
            [Database, "Machine-readable", "Metadata records available now, with research files to follow."],
          ].map(([Icon, title, copy]) => {
            const FeatureIcon = Icon as typeof FileCheck2;
            return (
              <article key={title as string} className="bg-white p-6 sm:p-8">
                <FeatureIcon className="mb-8 size-6 text-black/70" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="text-lg font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-black/52">{copy as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <footer id="about" className="scroll-mt-24 bg-[#0b1f33] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-[#63d7e6]">Carbon Data Hub</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">A clearer path from emissions evidence to research outcomes.</h2>
            </div>
            <Button asChild size="lg" className="h-12 justify-self-start rounded-full bg-white px-6 text-[#0b1f33] hover:bg-[#63d7e6] lg:justify-self-end">
              <a href="#datasets">Browse datasets <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-7 place-items-center border border-[#63d7e6]/35 font-mono text-[10px] font-semibold text-[#63d7e6]">DC</span>
              <p>A Data Cruiser research initiative</p>
            </div>
            <p>Research preview · September 2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
