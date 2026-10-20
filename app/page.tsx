import {
  ArrowDownToLine, ArrowRight, Braces, Database, ExternalLink,
  FileCheck2, GitBranch, Layers3, Scale,
} from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { MobileMenu } from "@/components/mobile-menu";

const datasets = [
  {
    id: "01", anchor: "scope3trace", name: "Scope3Trace",
    category: "Value-chain trace data", layer: "Trace the evidence", Icon: GitBranch,
    summary: "A structured dataset for studying how Scope 3 emissions claims connect to activities, suppliers, and underlying evidence.",
    purposes: ["Traceability", "Entity linking", "Evidence retrieval"],
    metadata: "/data/scope3trace.json", paper: "https://arxiv.org/abs/2607.17122",
    questions: ["How are value-chain emissions claims linked to evidence?", "Which entities and activities appear in the trace?", "Can each record be followed back to its source context?"],
  },
  {
    id: "02", anchor: "ghgbench", name: "GHGBench",
    category: "Evaluation benchmark", layer: "Evaluate the outcomes", Icon: Scale,
    summary: "A benchmark dataset for evaluating models and systems that work with greenhouse-gas disclosures, calculations, and reporting tasks.",
    purposes: ["Model evaluation", "Structured extraction", "Reproducibility"],
    metadata: "/data/ghgbench.json", paper: "https://arxiv.org/abs/2605.13743",
    questions: ["How reliably can a system interpret GHG information?", "Can results be compared across shared evaluation tasks?", "Are benchmark outcomes documented and repeatable?"],
  },
] as const;

function BrandMark() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="brand-mark">
      <path d="m4 21 7-10 6 5 7-12" stroke="currentColor" strokeWidth="2" />
      {[[4,21],[11,11],[17,16],[24,4]].map(([cx,cy]) => <circle key={cx} cx={cx} cy={cy} r="2.2" fill="currentColor" />)}
    </svg>
  );
}

function SignalField() {
  const points = Array.from({ length: 63 }, (_, i) => ({
    x: (i % 9) * 180 + ((i * 37) % 90) - 30,
    y: Math.floor(i / 9) * 120 + ((i * 23) % 65) - 35,
  }));
  return (
    <svg className="signal-field" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
      {points.map((p, i) => <g key={i}>
        {i % 9 < 8 && <path d={`M${p.x} ${p.y} L${points[i+1].x} ${points[i+1].y}`} />}
        {i < 54 && <path d={`M${p.x} ${p.y} L${points[i+9].x} ${points[i+9].y}`} />}
        {i < 53 && i % 3 === 0 && <path d={`M${p.x} ${p.y} L${points[i+10].x} ${points[i+10].y}`} />}
        <circle cx={p.x} cy={p.y} r={i % 7 === 0 ? 3 : 2} />
      </g>)}
      <circle className="signal-halo" cx="187" cy="108" r="17" />
      <circle className="signal-beacon" cx="187" cy="108" r="5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="https://www.datacruiser.ai/" aria-label="DataCruiser main website"><BrandMark /><span>DataCruiser</span></a>
          <a href="#top" className="subsite-name">Carbon Data Hub</a>
          <nav className="desktop-nav" aria-label="Primary navigation"><a href="#datasets">Datasets</a><a href="#research">Research</a><a href="#releases">Releases</a></nav>
          <a className="button button-small button-outline header-cta" href="https://www.datacruiser.ai/">Main website <ExternalLink size={13} aria-hidden="true" /></a>
          <MobileMenu />
        </div>
      </header>
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <SignalField />
          <div className="container hero-content">
            <p className="eyebrow"><span className="status-dot" /> DataCruiser / Carbon research</p>
            <h1 id="hero-title">Evidence for credible carbon.<br /><span><span className="hero-phrase">Trace it. Test it.</span>{" "}<span className="hero-phrase">Build on it.</span></span></h1>
            <p className="hero-description">Research datasets for connecting emissions claims to evidence<br className="desktop-break" /> and evaluating the systems that work with them.</p>
            <div className="button-row hero-actions"><a className="button button-primary" href="#datasets">Explore the datasets <ArrowRight size={16} aria-hidden="true" /></a><a className="button button-outline" href={assetPath("/data/catalog.json")} download><ArrowDownToLine size={16} aria-hidden="true" /> Download catalog</a></div>
            <p className="hero-note">Scope3Trace & GHGBench <span aria-hidden="true">·</span> Research preview</p>
          </div>
        </section>
        <div className="research-strip"><div className="container strip-inner"><p>A DataCruiser research initiative</p><div><span><Database size={15} aria-hidden="true" /> Two complementary datasets</span><span><Braces size={15} aria-hidden="true" /> Metadata available now</span></div></div></div>
        <section id="datasets" className="section container" aria-labelledby="datasets-title">
          <div className="section-heading"><div><p className="eyebrow">The datasets</p><h2 id="datasets-title">From source evidence<br />to measurable outcomes.</h2></div><p>Two complementary starting points for carbon research. Explore their purpose, read the papers, and access the metadata.</p></div>
          <div className="dataset-grid">
            {datasets.map(({ Icon, ...dataset }) => <article className="dataset-card" key={dataset.id}>
              <div className="card-top"><span className="dataset-icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span><span className="status-label"><span className="status-dot" /> Pre-release</span></div>
              <p className="card-category">{dataset.category}</p><h3>{dataset.name}</h3><p className="card-summary">{dataset.summary}</p>
              <ul className="tags" aria-label="Research uses">{dataset.purposes.map(p => <li key={p}>{p}</li>)}</ul>
              <div className="card-links"><a className="text-link" href={`#${dataset.anchor}`}>Explore dataset <ArrowRight size={16} aria-hidden="true" /></a><a className="muted-link" href={dataset.paper} target="_blank" rel="noreferrer">Read paper <ExternalLink size={14} aria-hidden="true" /></a></div>
              <a className="metadata-link" href={assetPath(dataset.metadata)} download><Braces size={15} aria-hidden="true" /> Download metadata <span>JSON <ArrowDownToLine size={13} aria-hidden="true" /></span></a>
            </article>)}
          </div>
          <p className="catalog-note"><span className="status-dot" /> Metadata records are available. Research data packages, documentation, and citation records are in preparation.</p>
        </section>
        <section id="research" className="research-section section" aria-labelledby="research-title"><div className="container">
          <div className="section-heading"><div><p className="eyebrow">Research directions</p><h2 id="research-title">Follow the evidence.<br /><span>Then put systems to the test.</span></h2></div><p>Scope3Trace focuses on the path back to source evidence. GHGBench focuses on evaluating greenhouse-gas information tasks.</p></div>
          <div className="research-records">{datasets.map(({ Icon, ...dataset }) => <article className="research-record" key={dataset.id} id={dataset.anchor}>
            <div className="record-title"><span className="record-number">{dataset.id}</span><div><p className="eyebrow">{dataset.layer}</p><h3><Icon size={24} strokeWidth={1.5} aria-hidden="true" />{dataset.name}</h3></div></div>
            <div className="record-body"><ul>{dataset.questions.map(q => <li key={q}><span aria-hidden="true">↗</span>{q}</li>)}</ul><div className="button-row"><a className="text-link" href={dataset.paper} target="_blank" rel="noreferrer">Read the arXiv paper <ExternalLink size={14} aria-hidden="true" /></a><a className="muted-link" href={assetPath(dataset.metadata)} download>Metadata JSON <ArrowDownToLine size={14} aria-hidden="true" /></a></div></div>
          </article>)}</div>
        </div></section>
        <section id="releases" className="section container" aria-labelledby="release-title">
          <div className="section-heading"><div><p className="eyebrow">Release readiness</p><h2 id="release-title">The context behind the data.</h2></div><p>Public releases will pair research files with the documentation, versioning, and references needed to use them.</p></div>
          <div className="release-table" role="table" aria-label="Dataset release preparation">
            <div className="release-row release-table-head" role="row"><span role="columnheader">Release component</span><span role="columnheader">What to expect</span><span role="columnheader">Status</span></div>
            {[["Metadata", "Machine-readable dataset records", "Available now"],["Data packages", "Validated research files", "In preparation"],["Documentation", "Dataset cards and field guides", "In preparation"],["Version & citation", "Stable releases and reference records", "Planned"]].map(([name,detail,status]) => <div className="release-row" role="row" key={name}><span role="cell">{name}</span><span role="cell">{detail}</span><span role="cell" className={status === "Available now" ? "release-available" : "release-pending"}><span className="status-dot" />{status}</span></div>)}
          </div>
          <div className="principles">{[[FileCheck2,"Documented","Dataset cards, field definitions, and known limitations."],[Layers3,"Versioned","Stable releases to support reproducible research."],[Braces,"Machine-readable","Structured metadata, ready to inspect and use."]].map(([Icon,title,copy]) => { const FeatureIcon = Icon as typeof FileCheck2; return <div key={title as string}><FeatureIcon size={20} strokeWidth={1.5} aria-hidden="true" /><h3>{title as string}</h3><p>{copy as string}</p></div>; })}</div>
        </section>
        <section id="about" className="about-section"><div className="container about-inner"><div><p className="eyebrow">Carbon Data Hub / DataCruiser</p><h2>Better evidence.<br /><span>More reproducible research.</span></h2><p>A focused home for Scope3Trace and GHGBench, bringing carbon research datasets into the DataCruiser ecosystem.</p></div><a className="button button-outline" href="https://www.datacruiser.ai/">Discover DataCruiser <ArrowRight size={16} aria-hidden="true" /></a></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="https://www.datacruiser.ai/"><BrandMark /><span>DataCruiser</span></a><p>Carbon Data Hub <span aria-hidden="true">/</span> Research preview</p><a href="mailto:tech@datacruiser.ai">tech@datacruiser.ai <ArrowRight size={13} aria-hidden="true" /></a></div></footer>
    </>
  );
}
