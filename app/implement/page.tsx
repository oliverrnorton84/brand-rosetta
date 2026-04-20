import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { pageJsonLd } from "../../lib/jsonld";

export const metadata: Metadata = {
  title: "Implementation Guide — Copy-paste Examples",
  description:
    "Copy-paste JSON-LD examples for implementing Brand Rosetta on Organisation and Product pages.",
};

const orgExample = `<script type="application/ld+json">
{
  "@context": {
    "@vocab": "https://schema.org/",
    "rosetta": "https://brandrosetta.org/vocab#"
  },
  "@type": "Organization",
  "name": "Your Brand Name",
  "url": "https://yourdomain.com",
  "description": "One-sentence factual description of your organisation.",

  "rosetta:positioning": "Two to four sentences. What category you are in, who you serve, what you do differently, and why that difference matters. Specific enough that it could not describe your nearest competitor.",

  "rosetta:brandVoice": "Three to five guidance sentences on tone and register. Descriptive sentences, not adjective lists. Specific enough that two writers following it would sound like the same brand.",

  "rosetta:era": "queryable",

  "rosetta:llmsTxtURL": "https://yourdomain.com/llms.txt",

  "rosetta:crawlerPolicy": "structured"
}
</script>`;

const productExample = `<script type="application/ld+json">
{
  "@context": {
    "@vocab": "https://schema.org/",
    "rosetta": "https://brandrosetta.org/vocab#"
  },
  "@type": "Product",
  "name": "Your Product Name",
  "description": "Factual one-line product description.",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "CAD",
    "availability": "https://schema.org/InStock"
  },

  "rosetta:useCase": [
    "First and primary use case as a complete scenario",
    "Second use case — a different context where the product is the right choice",
    "Third use case — an adjacent scenario the product genuinely serves well"
  ],

  "rosetta:notSuitedFor": [
    "Specific scenario where this product is the wrong recommendation",
    "Another scenario to exclude — written as a use case, not an audience label"
  ],

  "rosetta:pageIntent": ["purchase", "enquire"],

  "rosetta:reasonToBelieve": "Specific, verifiable evidence that substantiates the primary product claim. Not the claim restated — the proof.",

  "rosetta:elementOfValue": "One sentence naming the primary value the buyer gets.",

  "rosetta:targetMoment": "The specific occasion or decision moment that makes someone ready to buy. Describe the moment, not the person.",

  "rosetta:conversationalFlow": {
    "step1": "Establish context — what the customer needs and why",
    "step2": "Qualify — understand current situation and what is prompting the change",
    "step3": "Narrow — confirm specifics like size, variant, or configuration",
    "step4": "Route to action — check availability and move toward purchase or enquiry"
  },

  "rosetta:nextAction": "Instruction to the AI for the single most useful next question from this page context.",

  "rosetta:suggestedFollowUps": [
    {
      "question": "A likely follow-up question buyers ask",
      "guidance": "Authoritative handling guidance for this question."
    },
    {
      "question": "Another predictable follow-up",
      "guidance": "Specific handling guidance — not 'see our website'."
    }
  ],

  "rosetta:delayedPrompt": "Conversational prompt to surface after a natural dwell period. One sentence. Not sales language."
}
</script>`;

export default function ImplementPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd(
          "/implement",
          "Implement",
          "Copy-paste JSON-LD examples for implementing Brand Rosetta.",
          ["enquire"]
        )}
      />
      <div className="page-container-wide">
        <h1>Implement</h1>
        <p style={{ color: "var(--br-mid)" }}>
          Two copy-paste examples. Replace the placeholder text with your own
          content. Add the <code>&lt;script&gt;</code> block to the{" "}
          <code>&lt;head&gt;</code> of each relevant page.
        </p>

        <h2>Organisation page</h2>
        <p>
          Foundation tier only. Every brand should start here. This block goes on
          your homepage or about page — any page where your Organisation schema.org
          entity is declared.
        </p>
        <pre><code>{orgExample}</code></pre>

        <h2>Product page</h2>
        <p>
          Foundation and Extended tier properties. This block goes on individual
          product or service pages. Extended properties (
          <code>reasonToBelieve</code>, <code>elementOfValue</code>,{" "}
          <code>targetMoment</code>, <code>conversationalFlow</code>,{" "}
          <code>nextAction</code>, <code>suggestedFollowUps</code>,{" "}
          <code>delayedPrompt</code>) are optional — include the subset that matches
          your current infrastructure.
        </p>
        <pre><code>{productExample}</code></pre>

        <h2>Notes</h2>
        <ul>
          <li>
            Both examples use the same <code>@context</code> declaration. Include
            it in every Brand Rosetta JSON-LD block.
          </li>
          <li>
            <code>rosetta:pageIntent</code> declares what the page is designed to
            drive. It does not require a transactional endpoint. If you also have a
            live agent endpoint, declare <code>rosetta:supportedActions</code>{" "}
            separately to show what is currently wired.
          </li>
          <li>
            Transactional properties (<code>catalogueAPI</code>,{" "}
            <code>inventoryAPI</code>, <code>transactionalEndpoint</code>,{" "}
            <code>supportedActions</code>, <code>checkAvailability</code>) should
            only be declared when the endpoints are built, tested, and reliable.
          </li>
          <li>
            See the <a href="/vocab">vocabulary reference</a> for full definitions,
            guidance, and what to avoid for each property.
          </li>
        </ul>
      </div>
    </>
  );
}
