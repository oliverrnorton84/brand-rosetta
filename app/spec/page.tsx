import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { pageJsonLd } from "../../lib/jsonld";

export const metadata: Metadata = {
  title: "Specification — v0.1 Initial Proposal",
  description:
    "The complete Brand Rosetta v0.1 specification — an open vocabulary extension to schema.org JSON-LD for brand AI readiness.",
};

export default function SpecPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd(
          "/spec",
          "Specification",
          "The complete Brand Rosetta v0.1 specification.",
          ["enquire"]
        )}
      />
      <div className="page-container">
        <div className="version-pill">v0.1</div>
        <h1>Brand Rosetta Specification</h1>
        <p style={{ color: "var(--br-mid)" }}>
          Version 0.1 (Initial Proposal) &middot; April 2026 &middot; CC BY 4.0
        </p>

        {/* ── What this document is ── */}
        <h2>What this document is</h2>
        <p>
          Brand Rosetta is a formal open-source vocabulary specification proposing
          an extension to schema.org JSON-LD for brand-level AI readiness. It
          defines a common vocabulary for encoding what AI systems need to
          understand a brand accurately — what it stands for, how it should be
          represented in conversation, when its products are the right
          recommendation, and what it can do on a consumer&rsquo;s behalf.
        </p>
        <p>
          Published by Nodal Strategy. Available for free implementation by any
          brand, developer, or agency under Creative Commons CC BY 4.0. This is an
          open-source contribution — not a commercial product.
        </p>

        {/* ── Dual-layer standard ── */}
        <h2>Dual-layer standard</h2>
        <p>
          Brand Rosetta is a dual-layer standard. It defines a structured content
          schema for llms.txt — giving the site-level AI declaration a consistent,
          machine-optimised format — and a JSON-LD vocabulary extension for per-page
          structured data. The same <code>rosetta:</code> properties appear at both
          levels: in llms.txt at the brand and catalogue level, and in JSON-LD{" "}
          <code>&lt;head&gt;</code> tags at the individual product and service level.
        </p>

        {/* ── Technical identity ── */}
        <h2>Technical identity</h2>
        <table className="spec-table">
          <tbody>
            <tr><td><strong>Standard name</strong></td><td>Brand Rosetta</td></tr>
            <tr><td><strong>Created and maintained</strong></td><td>Nodal Strategy</td></tr>
            <tr><td><strong>Version</strong></td><td>0.1 (Initial Proposal)</td></tr>
            <tr><td><strong>Prefix</strong></td><td><code>rosetta:</code></td></tr>
            <tr><td><strong>Namespace URL</strong></td><td><code>https://brandrosetta.org/vocab#</code></td></tr>
            <tr><td><strong>Spec URL</strong></td><td>brandrosetta.org</td></tr>
            <tr><td><strong>GitHub</strong></td><td><a href="https://github.com/nodalstrategy/brand-rosetta">github.com/nodalstrategy/brand-rosetta</a></td></tr>
            <tr><td><strong>Domain</strong></td><td>brandrosetta.org / brandrosetta.com</td></tr>
            <tr><td><strong>Licence</strong></td><td>Creative Commons CC BY 4.0</td></tr>
          </tbody>
        </table>

        <h3>Context declaration in JSON-LD</h3>
        <pre><code>{`{
  "@context": {
    "@vocab": "https://schema.org/",
    "rosetta": "https://brandrosetta.org/vocab#"
  }
}`}</code></pre>

        {/* ── Background and rationale ── */}
        <h2>Background and rationale</h2>
        <p>
          Schema.org provides a shared vocabulary for structured data covering
          entities, relationships, and actions. Founded by Google, Microsoft, Yahoo,
          and Yandex in 2011. Now deployed across over 45 million web domains.
        </p>
        <p>
          Schema.org handles what a brand <em>is</em>. It does not handle how a brand
          should be <em>understood, represented, or interacted with</em> by AI systems
          in the queried era.
        </p>
        <p>
          The gap: existing schema.org types — Product, Service, Organization —
          describe factual attributes. They do not encode brand voice and positioning
          intent, use case guidance for AI recommendation, reasons to believe product
          claims, conversational flow logic for AI interactions, or transactional
          readiness signals for AI agents.
        </p>
        <p>
          Brand Rosetta proposes properties to fill that gap as a formal named
          extension to schema.org JSON-LD. The standard builds on three existing
          infrastructure layers:
        </p>
        <ul>
          <li>
            <strong>robots.txt</strong> — access permissions for crawlers. Brand
            Rosetta adds <code>rosetta:crawlerPolicy</code> to declare AI crawler
            access policy explicitly.
          </li>
          <li>
            <strong>llms.txt</strong> — site-level plain text declaration for LLM
            consumption. Brand Rosetta complements it with per-page structured data
            and defines a structured content schema for llms.txt itself.
          </li>
          <li>
            <strong>schema.org JSON-LD</strong> — structured data for entity
            understanding. Brand Rosetta extends it with brand intelligence
            properties that schema.org does not currently cover.
          </li>
        </ul>

        {/* ── RAG systems ── */}
        <h2>Applying Brand Rosetta to RAG systems</h2>
        <p>
          Brand Rosetta properties are not limited to passive web crawling contexts.
          When implemented in content that feeds a retrieval-augmented generation
          (RAG) system, the properties travel with the content through retrieval and
          can be incorporated into AI behaviour at the system prompt level.
        </p>
        <p>
          In a RAG architecture, content is chunked, embedded as vectors, and
          retrieved based on semantic similarity to a query. When Brand Rosetta
          properties are embedded in those content chunks, they are retrieved
          alongside the content they describe. A system prompt can then instruct the
          model how to use them:
        </p>
        <pre><code>{`When retrieved content contains rosetta: properties, incorporate them as follows:

rosetta:pageIntent — defines the intended outcome this page is designed to drive
rosetta:notSuitedFor — defines what you must decline or redirect
rosetta:conversationalFlow — defines your question sequence
rosetta:nextAction — defines your immediate next question
rosetta:brandVoice — defines the register and tone of your responses`}</code></pre>

        {/* ── Implementation tiers ── */}
        <h2>Implementation tiers</h2>
        <p>
          Brand Rosetta properties are divided into two implementation tiers.
        </p>
        <h3>Foundation</h3>
        <p>
          Foundation properties address the core gap identified in the accompanying
          research: most brands provide no structured signal for AI identity,
          recommendation accuracy, or page intent. Foundation properties can be
          implemented on any existing site without backend changes, additional
          infrastructure, or embedded AI interfaces. They represent the minimum
          viable AI readiness layer and are the recommended starting point.
        </p>
        <p>
          8 properties: <code>positioning</code>, <code>brandVoice</code>,{" "}
          <code>era</code>, <code>llmsTxtURL</code>, <code>crawlerPolicy</code>,{" "}
          <code>useCase</code>, <code>notSuitedFor</code>, <code>pageIntent</code>.
        </p>

        <h3>Extended</h3>
        <p>
          Extended properties require additional investment — an embedded AI chat
          interface, a live product or catalogue API, or a transactional endpoint.
          They are designed for brands building toward active AI readiness. Each
          property in the extended tier is independent. Brands can implement any
          subset that matches their current infrastructure.
        </p>
        <p>
          13 properties: <code>reasonToBelieve</code>,{" "}
          <code>elementOfValue</code>, <code>targetMoment</code>,{" "}
          <code>conversationalFlow</code>, <code>nextAction</code>,{" "}
          <code>suggestedFollowUps</code>, <code>delayedPrompt</code>,{" "}
          <code>catalogueAPI</code>, <code>inventoryAPI</code>,{" "}
          <code>inventoryAPIParams</code>, <code>transactionalEndpoint</code>,{" "}
          <code>supportedActions</code>, <code>checkAvailability</code>.
        </p>

        <h2>Property reference table</h2>
        <table className="spec-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Tier</th>
              <th>Applies to</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["rosetta:positioning", "Foundation", "Organization, Brand"],
              ["rosetta:brandVoice", "Foundation", "Organization, Brand"],
              ["rosetta:era", "Foundation", "WebSite, WebPage"],
              ["rosetta:llmsTxtURL", "Foundation", "WebSite, Organization"],
              ["rosetta:crawlerPolicy", "Foundation", "WebSite"],
              ["rosetta:useCase", "Foundation", "Product, Service"],
              ["rosetta:notSuitedFor", "Foundation", "Product, Service"],
              ["rosetta:pageIntent", "Foundation", "Product, Service, WebPage"],
              ["rosetta:reasonToBelieve", "Extended", "Product, Service"],
              ["rosetta:elementOfValue", "Extended", "Product, Service"],
              ["rosetta:targetMoment", "Extended", "Product, Service"],
              ["rosetta:conversationalFlow", "Extended", "Product, Service, WebPage"],
              ["rosetta:nextAction", "Extended", "Product, Service, WebPage"],
              ["rosetta:suggestedFollowUps", "Extended", "Product, Service, WebPage"],
              ["rosetta:delayedPrompt", "Extended", "WebPage, Product"],
              ["rosetta:catalogueAPI", "Extended", "WebSite, Organization"],
              ["rosetta:inventoryAPI", "Extended", "Product, Offer"],
              ["rosetta:inventoryAPIParams", "Extended", "Product"],
              ["rosetta:transactionalEndpoint", "Extended", "Product, Service"],
              ["rosetta:supportedActions", "Extended", "Product, Service"],
              ["rosetta:checkAvailability", "Extended", "Product, Service"],
            ].map(([name, tier, applies]) => (
              <tr key={name}>
                <td><code>{name}</code></td>
                <td>{tier}</td>
                <td>{applies}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Full definitions, guidance, and examples for each property are in the{" "}
          <a href="/vocab">vocabulary reference</a>.
        </p>

        {/* ── pageIntent vs supportedActions ── */}
        <h2>pageIntent vs supportedActions</h2>
        <p>
          The gap between <code>rosetta:pageIntent</code> and{" "}
          <code>rosetta:supportedActions</code> is intentional and honest.{" "}
          <code>pageIntent</code> declares what a page is designed to drive — it is a
          Foundation-tier property that requires no API or backend.{" "}
          <code>supportedActions</code> declares which actions an LLM agent can
          currently execute via a live endpoint — it is an Extended-tier property that
          requires a transactional endpoint.
        </p>
        <p>
          A product page designed for purchase (<code>pageIntent: [&quot;purchase&quot;]</code>)
          may only currently support enquiry via an agent endpoint (
          <code>supportedActions: [&quot;enquire&quot;]</code>). Declaring both is more
          honest and more useful than collapsing them.
        </p>

        {/* ── Versioning ── */}
        <h2>Versioning policy</h2>
        <p>
          Brand Rosetta uses semantic versioning. Version updates are triggered by
          changes to web infrastructure standards, new AI agent capabilities, or
          community-identified gaps — not by individual model updates.
        </p>
        <ul>
          <li>
            <strong>Patch versions (0.1.x)</strong> — clarifications, corrected
            examples, typographical fixes. No implementation changes required.
          </li>
          <li>
            <strong>Minor versions (0.2, 0.3...)</strong> — new properties added.
            Backwards compatible.
          </li>
          <li>
            <strong>Major versions (1.0, 2.0...)</strong> — structural changes to
            existing properties. Rare.
          </li>
        </ul>
        <p>
          Model-agnostic by design. Brand Rosetta properties use self-describing
          names and plain text values that any capable LLM can interpret without
          specific training on the vocabulary.
        </p>

        {/* ── Limitations ── */}
        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>AI compliance is not guaranteed.</strong>{" "}
            <code>rosetta:</code> properties are signals, not commands.
          </li>
          <li>
            <strong>Proposed, not formal standard.</strong> Submission to schema.org
            for formal inclusion is planned once sufficient real-world implementation
            exists.
          </li>
          <li>
            <strong>Point-in-time accuracy.</strong> Properties are point-in-time
            declarations. Accuracy depends on keeping structured data current.
          </li>
          <li>
            <strong>Transactional properties require tool use.</strong>{" "}
            <code>rosetta:inventoryAPI</code> and transactional properties require AI
            agents with tool use enabled to function.
          </li>
          <li>
            <strong>JavaScript-rendered content is not addressed.</strong> The
            vocabulary must sit alongside static or server-rendered content. Brands
            using SPA frameworks should implement{" "}
            <code>rosetta:catalogueAPI</code> or an equivalent static fallback.
          </li>
        </ul>

        {/* ── Licence ── */}
        <h2>Licence</h2>
        <p>
          Published by <a href="https://nodalstrategy.com">Nodal Strategy</a> under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons CC BY 4.0
          </a>
          . Free to implement, adapt, and build upon with attribution.
        </p>
      </div>
    </>
  );
}
