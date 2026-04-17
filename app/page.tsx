import JsonLd from "./components/JsonLd";
import { pageJsonLd } from "../lib/jsonld";

export default function Home() {
  return (
    <>
      <JsonLd
        data={pageJsonLd(
          "/",
          "Brand Rosetta",
          "An open vocabulary extension to schema.org JSON-LD for brand AI readiness.",
          ["enquire"]
        )}
      />
      <div className="page-container">
        <div className="version-pill">v0.1</div>
        <h1>Brand Rosetta</h1>
        <p style={{ fontSize: "1.125rem", color: "var(--br-mid)", marginTop: "0.5rem" }}>
          An open vocabulary extension to schema.org JSON-LD for brand AI readiness.
        </p>

        <h2>What this is</h2>
        <p>
          Brand Rosetta defines a common vocabulary for encoding what AI systems need
          to understand a brand accurately — what it stands for, how it should be
          represented in conversation, when its products are the right recommendation,
          and what it can do on a consumer&rsquo;s behalf.
        </p>
        <p>
          The standard extends schema.org JSON-LD with 21 properties split across
          two implementation tiers. Foundation properties can be deployed on any
          existing site without backend changes. Extended properties support
          conversational AI flows and agent commerce.
        </p>

        <h2>Technical identity</h2>
        <table className="spec-table">
          <tbody>
            <tr>
              <td><strong>Prefix</strong></td>
              <td><code>rosetta:</code></td>
            </tr>
            <tr>
              <td><strong>Namespace</strong></td>
              <td><code>https://brandrosetta.org/vocab#</code></td>
            </tr>
            <tr>
              <td><strong>Version</strong></td>
              <td>0.1 (Initial Proposal)</td>
            </tr>
            <tr>
              <td><strong>Licence</strong></td>
              <td>CC BY 4.0</td>
            </tr>
            <tr>
              <td><strong>Author</strong></td>
              <td>Oliver Norton, <a href="https://nodalstrategy.com">Nodal Strategy</a></td>
            </tr>
          </tbody>
        </table>

        <h2>Context declaration</h2>
        <pre><code>{`{
  "@context": {
    "@vocab": "https://schema.org/",
    "rosetta": "https://brandrosetta.org/vocab#"
  }
}`}</code></pre>

        <h2>Get started</h2>
        <ul>
          <li>
            <a href="/vocab">Vocabulary reference</a> — full property definitions,
            examples, and guidance
          </li>
          <li>
            <a href="/spec">Specification</a> — the complete standard as a readable
            document
          </li>
          <li>
            <a href="/implement">Implement</a> — copy-paste JSON-LD examples for
            Organisation and Product pages
          </li>
        </ul>

        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://nodalstrategy.com">Research paper</a> — the
            accompanying brand AI readiness evaluation
          </li>
          <li>
            <a href="https://github.com/nodalstrategy/brand-rosetta">GitHub</a> —
            source, issues, and contributions
          </li>
        </ul>
      </div>
    </>
  );
}
