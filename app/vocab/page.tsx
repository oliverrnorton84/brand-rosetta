import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { pageJsonLd } from "../../lib/jsonld";

export const metadata: Metadata = {
  title: "Vocabulary Reference — 21 Properties",
  description:
    "Full property reference for the Brand Rosetta open vocabulary standard.",
};

type Property = {
  name: string;
  tier: "Foundation" | "Extended";
  definition: string;
  value: string;
  appliesTo: string;
  guidance: string;
  avoid: string[];
  example: string;
};

const properties: Property[] = [
  {
    name: "rosetta:positioning",
    tier: "Foundation",
    definition:
      "A plain-text statement of brand positioning written for LLM retrieval. More specific than schema.org description. Should include differentiation, audience, and category framing.",
    value: "Text",
    appliesTo: "Organization, Brand",
    guidance:
      'This is the answer to the question an AI system will be asked most often about your brand: "what is [brand] and who is it for?" Write it as if you are briefing a knowledgeable friend who will then speak about your brand in conversation. Aim for two to four sentences. It should be specific enough that it could not describe your nearest competitor without modification.',
    avoid: [
      "Generic claims that apply to every brand in your category",
      "Aspirational language about where you are going",
      "Jargon that requires industry context to decode",
      "More than four sentences",
    ],
    example: `"rosetta:positioning": "Nodal Strategy is a marketing infrastructure consultancy specialising in AI readiness for the queried era. We help brands build the machine-readable layer that ensures accurate representation in AI-mediated discovery."`,
  },
  {
    name: "rosetta:brandVoice",
    tier: "Foundation",
    definition:
      "Guidance on tone and register for conversational representation by AI systems.",
    value: "Text",
    appliesTo: "Organization, Brand",
    guidance:
      "This property describes how your brand says things, not what it says. Descriptive sentences work better than adjective lists. Keep it to three to five guidance sentences specific enough that two different writers following it would produce responses that sound like they come from the same brand.",
    avoid: [
      "Instructions about content rather than register",
      "Contradictory guidance like 'professional but casual'",
      "Descriptors that apply to every brand — 'authentic', 'transparent', 'human'",
      "Adjective lists without context",
    ],
    example: `"rosetta:brandVoice": "Direct and specific — makes claims with evidence rather than assertion. Conversational in register but not casual. Avoids marketing inflation. Uses plain language over jargon. Short sentences preferred."`,
  },
  {
    name: "rosetta:era",
    tier: "Foundation",
    definition:
      "Which web era this content is primarily designed for. Allows evaluation tools to assess infrastructure intent.",
    value: "Enumeration: linear | navigated | queryable",
    appliesTo: "WebSite, WebPage",
    guidance:
      "Primarily for evaluation and audit tools. linear refers to broadcast-era content. navigated refers to content designed for the search era. queryable refers to content designed for the queried era — structured for machine comprehension. This property is honest self-assessment, not aspiration.",
    avoid: [
      "Declaring queryable on pages where Brand Rosetta properties have not been implemented",
      "Using this property as a marketing claim rather than an infrastructure descriptor",
    ],
    example: `"rosetta:era": "queryable"`,
  },
  {
    name: "rosetta:llmsTxtURL",
    tier: "Foundation",
    definition: "URL of the primary llms.txt file for this domain.",
    value: "URL",
    appliesTo: "WebSite, Organization",
    guidance:
      "Connects the page-level structured data to the site-level llms.txt declaration, giving AI crawlers a direct path from any page to the authoritative site-wide brand document.",
    avoid: [
      "Pointing to a placeholder or incomplete llms.txt",
      "Using a relative URL rather than an absolute URL with full domain",
    ],
    example: `"rosetta:llmsTxtURL": "https://yourdomain.com/llms.txt"`,
  },
  {
    name: "rosetta:crawlerPolicy",
    tier: "Foundation",
    definition:
      "Declaration of which AI crawler access policy this site has implemented.",
    value: "Enumeration: full | structured | llms-only | blocked",
    appliesTo: "WebSite",
    guidance:
      "Surfaces the robots.txt configuration as a machine-readable declaration. Declare the policy that matches your actual robots.txt configuration. This property is honest infrastructure signalling, not a preference statement.",
    avoid: [
      "Declaring a more permissive policy than your robots.txt actually implements",
      "Declaring blocked and expecting AI systems to represent your brand accurately",
    ],
    example: `"rosetta:crawlerPolicy": "structured"`,
  },
  {
    name: "rosetta:useCase",
    tier: "Foundation",
    definition:
      "Specific scenarios in which this product or service is the right choice. More granular than schema.org audience. Written for AI recommendation contexts.",
    value: "Text or array of text",
    appliesTo: "Product, Service, Offer",
    guidance:
      'Write use cases as complete scenarios, not audience labels. "Serious road runners training for events from 5km to marathon distance" is a use case. "Runners" is an audience label. Include three to six distinct use cases.',
    avoid: [
      "Audience demographics without scenario context",
      "Use cases your product serves poorly",
      "Marketing language — use cases should read as objective scenario descriptions",
    ],
    example: `"rosetta:useCase": [
  "Road running from 5km to marathon distance at training and tempo pace",
  "Daily training shoe for heel-to-midfoot strikers seeking cushioned response",
  "Performance upgrade from entry-level without moving to racing flat price point"
]`,
  },
  {
    name: "rosetta:notSuitedFor",
    tier: "Foundation",
    definition:
      "Explicit statement of what this product or service is not designed for. Reduces AI misrepresentation and inappropriate recommendations.",
    value: "Text or array of text",
    appliesTo: "Product, Service",
    guidance:
      "One of the most underused levers in AI readiness and one of the most valuable. AI systems frequently recommend products in contexts where they are a poor fit because they work from positive signals only. notSuitedFor provides the negative signal directly.",
    avoid: [
      "Exclusions that are obvious from the product category",
      "Over-excluding — if the list is longer than five or six items the product may have a positioning problem",
      "Vague exclusions — 'not for everyone' is not a useful signal",
    ],
    example: `"rosetta:notSuitedFor": [
  "Trail running on technical or loose terrain",
  "Heavy lateral movement sports such as tennis or basketball",
  "Minimalist or zero-drop preference",
  "Gym use or cross-training"
]`,
  },
  {
    name: "rosetta:pageIntent",
    tier: "Foundation",
    definition:
      "Declaration of the primary action this page is designed to drive. Provides AI systems with the intended outcome of engagement with this page — independent of whether a transactional endpoint exists to fulfil it.",
    value: "Enumeration or array: purchase | reserve | enquire | book | subscribe",
    appliesTo: "Product, Service, WebPage",
    guidance:
      "Most pages that exist to drive an action do not declare that action in structured data. rosetta:pageIntent fills this gap. It is not a transactional capability declaration — it does not require an endpoint. It is a statement of what the page is designed to accomplish. Distinct from rosetta:supportedActions, which declares what is currently wired.",
    avoid: [
      "Declaring more intent than the page actually supports",
      "Omitting this on pages where the intent is obvious to a human — that apparent obviousness is precisely what AI systems cannot infer",
      "Using this as an aspirational claim",
    ],
    example: `"rosetta:pageIntent": ["purchase", "enquire"]`,
  },
  {
    name: "rosetta:reasonToBelieve",
    tier: "Extended",
    definition:
      "Evidence or proof points that substantiate the primary product claim. Distinguishes claim from substantiation for AI systems making recommendations.",
    value: "Text",
    appliesTo: "Product, Service",
    guidance:
      "AI systems making recommendations increasingly prefer substantiated claims. Write it as a factual statement, not a marketing sentence. The most effective reason to believe is specific, verifiable, and tied directly to the primary product claim.",
    avoid: [
      "Repeating the primary claim rather than substantiating it",
      "Vague or unverifiable evidence",
      "Award claims without context",
    ],
    example: `"rosetta:reasonToBelieve": "Lightstrike Pro midsole independently tested at 87% energy return by the University of Calgary Biomechanics Lab."`,
  },
  {
    name: "rosetta:elementOfValue",
    tier: "Extended",
    definition:
      "The primary value this product or service delivers. Functional, emotional, or commercial.",
    value: "Text",
    appliesTo: "Product, Service",
    guidance:
      'Name the one value most central to why buyers choose you over alternatives. Keep it to one sentence. It should complete the phrase: "the primary reason someone buys this is because they get..."',
    avoid: [
      "Listing multiple value dimensions — choose the most important one",
      "Confusing value with features",
    ],
    example: `"rosetta:elementOfValue": "Elite racing midsole technology at daily trainer price."`,
  },
  {
    name: "rosetta:targetMoment",
    tier: "Extended",
    definition:
      "The specific occasion, need state, or decision moment this product or service addresses.",
    value: "Text",
    appliesTo: "Product, Service",
    guidance:
      "Where rosetta:useCase describes the ongoing scenario your product serves, targetMoment describes the trigger — the specific point in time or circumstance that makes someone ready to buy. Describe the moment, not the person.",
    avoid: [
      "Describing a demographic rather than a moment",
      "Overlapping too heavily with rosetta:useCase",
    ],
    example: `"rosetta:targetMoment": "Runner who has plateaued in entry-level footwear and is ready to invest in performance technology but is not yet committed to the price point of a dedicated racing flat."`,
  },
  {
    name: "rosetta:conversationalFlow",
    tier: "Extended",
    definition:
      "Ordered guidance for how a conversation about this page should progress when accessed by an AI agent. Not a script — a suggested sequence that respects user agency while routing toward useful outcomes.",
    value: "Object with ordered steps",
    appliesTo: "Product, Service, WebPage",
    guidance:
      "Design the flow the way a skilled sales consultant would approach the conversation. Establish context first, then qualify, then narrow, then route to action. Use four to five steps. Each step should be a question or topic to establish, not a scripted line.",
    avoid: [
      "More than five steps",
      "Scripted responses rather than routing guidance",
      "Steps that assume information the user has not provided",
      "Skipping qualification and jumping directly to purchase routing",
    ],
    example: `"rosetta:conversationalFlow": {
  "step1": "Establish running context — surface, distance, and pace goals",
  "step2": "Understand current footwear and what is prompting the change",
  "step3": "Confirm size and any fit considerations",
  "step4": "Establish colourway preference from available options",
  "step5": "Check availability and route to purchase or enquiry"
}`,
  },
  {
    name: "rosetta:nextAction",
    tier: "Extended",
    definition:
      "The single most useful next question or action from this page context. Primary nudge for AI interactions when full conversational flow is not followed.",
    value: "Text",
    appliesTo: "Product, Service, WebPage",
    guidance:
      "If conversationalFlow is the full routing map, nextAction is the most important single turn. Think about the one question that most reliably moves a conversation from interest to useful outcome. Write it as an instruction to the AI, not as the question itself.",
    avoid: [
      "Replicating the first step of conversationalFlow without adding standalone value",
      "Writing it as the question to ask the user rather than as guidance for the AI system",
    ],
    example: `"rosetta:nextAction": "Ask what size the customer normally wears before discussing colourway options or availability."`,
  },
  {
    name: "rosetta:suggestedFollowUps",
    tier: "Extended",
    definition:
      "An array of likely follow-up questions with suggested handling guidance.",
    value: "Array of objects with question and guidance properties",
    appliesTo: "Product, Service, WebPage",
    guidance:
      "After a primary recommendation, buyers typically have a small set of predictable follow-up questions. Declaring them gives AI systems authoritative handling guidance rather than inferred answers. Focus on questions that most often determine whether a buyer proceeds or hesitates.",
    avoid: [
      "Generic questions that apply to all products in the category",
      "Guidance that is too vague to act on",
    ],
    example: `"rosetta:suggestedFollowUps": [
  {
    "question": "Does it run true to size?",
    "guidance": "Runs true to size for standard width. Recommend half size up for wide feet."
  },
  {
    "question": "How does it compare to the Adizero SL?",
    "guidance": "More cushioning and durability than the SL. Strider Pro suits higher mileage; SL suits tempo and race-day."
  }
]`,
  },
  {
    name: "rosetta:delayedPrompt",
    tier: "Extended",
    definition:
      "A suggested follow-up prompt for AI interfaces to surface after a natural dwell period. Mimics conversational attentiveness rather than immediate interruption.",
    value: "Text",
    appliesTo: "WebPage, Product",
    guidance:
      "Encodes the timing signal of a good human consultant — a prompt to surface after the user has had time to engage with the content. Write it as conversational text the AI interface could surface directly to the user. One sentence.",
    avoid: [
      "Sales language or urgency signals",
      "Prompts that require context the AI does not have",
      "Identical prompts across all products",
    ],
    example: `"rosetta:delayedPrompt": "Still exploring? I can help you work out whether this is the right shoe for your training — just tell me what you're training for."`,
  },
  {
    name: "rosetta:catalogueAPI",
    tier: "Extended",
    definition:
      "URL of an endpoint returning the full product or service catalogue in structured JSON.",
    value: "URL",
    appliesTo: "WebSite, Organization",
    guidance:
      "Solves JavaScript-rendered catalogue invisibility without requiring architectural changes. An AI agent with tool use can call the endpoint and retrieve the full catalogue in one request.",
    avoid: [
      "Declaring this before the endpoint is built and tested",
      "Pointing to an endpoint that requires authentication the AI agent cannot provide",
    ],
    example: `"rosetta:catalogueAPI": "https://yourdomain.com/api/products?format=json"`,
  },
  {
    name: "rosetta:inventoryAPI",
    tier: "Extended",
    definition:
      "URL of an endpoint that returns real-time product availability.",
    value: "URL",
    appliesTo: "Product, Offer",
    guidance:
      "Marks the boundary between passive and active AI readiness. The endpoint should accept product, size, and colour parameters and return availability, price, and alternatives. Build and test the endpoint before declaring it.",
    avoid: [
      "Declaring the property before the endpoint is built and tested",
      "Pointing to an endpoint that requires authentication the AI agent cannot provide",
    ],
    example: `"rosetta:inventoryAPI": "https://yourdomain.com/api/inventory"`,
  },
  {
    name: "rosetta:inventoryAPIParams",
    tier: "Extended",
    definition:
      "Documentation of parameters accepted by the inventory API endpoint.",
    value: "Text",
    appliesTo: "Product",
    guidance:
      "Documents the API so AI agents can call it correctly without separate developer documentation. Write it as a summary section of an API reference — parameter names, types, required/optional status, and response format.",
    avoid: [
      "Vague descriptions that leave parameter format ambiguous",
      "Omitting the response format",
    ],
    example: `"rosetta:inventoryAPIParams": "Required: product (string, product ID). Optional: size (string, UK sizing e.g. 9 or 9.5), colour (string, exact catalogue name). Response: available (boolean), alternatives (array), price (number), currency."`,
  },
  {
    name: "rosetta:transactionalEndpoint",
    tier: "Extended",
    definition:
      "URL of an endpoint that supports purchase, reservation, booking, or enquiry completion by AI agents.",
    value: "URL",
    appliesTo: "Product, Service",
    guidance:
      "Where the inventory API answers 'is this available?', the transactional endpoint answers 'can I act on it?'. This is the most advanced Brand Rosetta property. Start with enquire or reserve before committing to purchase.",
    avoid: [
      "Declaring a purchase endpoint without appropriate security measures",
      "Supporting more actions than your fulfilment infrastructure can reliably handle",
    ],
    example: `"rosetta:transactionalEndpoint": "https://yourdomain.com/api/transact"`,
  },
  {
    name: "rosetta:supportedActions",
    tier: "Extended",
    definition:
      "Explicit declaration of which actions an LLM agent can execute against this page's transactional endpoint. Distinct from rosetta:pageIntent, which declares the page's intended outcome.",
    value: "Array: purchase | reserve | enquire | book | subscribe",
    appliesTo: "Product, Service",
    guidance:
      "Where rosetta:pageIntent tells an AI system what a page is designed to accomplish, rosetta:supportedActions tells it what a live endpoint will actually accept. These are not always the same. Declaring both is honest and useful — the AI knows the goal and the current limit.",
    avoid: [
      "Declaring purchase before the payment flow is agent-ready and secured",
      "Confusing this with rosetta:pageIntent — intent and executable capability are different",
      "Declaring actions the endpoint does not actually support",
    ],
    example: `"rosetta:supportedActions": ["reserve", "enquire"]`,
  },
  {
    name: "rosetta:checkAvailability",
    tier: "Extended",
    definition:
      "Plain-text instruction for how an AI agent should check availability for this product or service.",
    value: "Text",
    appliesTo: "Product, Service",
    guidance:
      "Bridges the gap between the AI agent's general capability and your specific API implementation. Write it as a direct instruction naming the property where the API URL is declared, the parameters it expects, and what the agent should do with the response.",
    avoid: [
      "Omitting this when inventoryAPI is declared",
      "Writing it as a description of the API rather than an instruction to the agent",
    ],
    example: `"rosetta:checkAvailability": "Call rosetta:inventoryAPI with product ID, size, and colour before completing a recommendation. If available is false, surface the alternatives array."`,
  },
];

function PropertyCard({ prop }: { prop: Property }) {
  return (
    <div className="property-card" id={prop.name.replace("rosetta:", "")}>
      <div>
        <span className="property-name">{prop.name}</span>
        <span className={`tier-badge ${prop.tier === "Foundation" ? "tier-foundation" : "tier-extended"}`}>
          {prop.tier}
        </span>
      </div>
      <div className="property-meta">
        <span>Value: {prop.value}</span>
        <span>Applies to: {prop.appliesTo}</span>
      </div>
      <p>{prop.definition}</p>
      <h3>Guidance</h3>
      <p>{prop.guidance}</p>
      <div className="avoid-list">
        <p>What to avoid</p>
        <ul>
          {prop.avoid.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <h3>Example</h3>
      <pre><code>{prop.example}</code></pre>
    </div>
  );
}

export default function VocabPage() {
  const foundation = properties.filter((p) => p.tier === "Foundation");
  const extended = properties.filter((p) => p.tier === "Extended");

  return (
    <>
      <JsonLd
        data={pageJsonLd(
          "/vocab",
          "Vocabulary Reference",
          "Full property reference for the Brand Rosetta open vocabulary standard.",
          ["enquire"]
        )}
      />
      <div className="page-container-wide">
        <h1>Vocabulary Reference</h1>
        <p style={{ color: "var(--br-mid)" }}>
          21 properties across two implementation tiers. Each entry includes a
          definition, expected value, implementation guidance, what to avoid, and
          a worked example.
        </p>

        <h2>Foundation Tier</h2>
        <p>
          Foundation properties address the core gap: most brands provide no
          structured signal for AI identity, recommendation accuracy, or page
          intent. These can be implemented on any existing site without backend
          changes.
        </p>
        {foundation.map((prop) => (
          <PropertyCard key={prop.name} prop={prop} />
        ))}

        <h2>Extended Tier</h2>
        <p>
          Extended properties require additional investment — an embedded AI chat
          interface, a live product API, or a transactional endpoint. Each is
          independent; implement any subset that matches your current
          infrastructure.
        </p>
        {extended.map((prop) => (
          <PropertyCard key={prop.name} prop={prop} />
        ))}
      </div>
    </>
  );
}
