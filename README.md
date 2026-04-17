# Brand Rosetta

Reference site for the Brand Rosetta open vocabulary standard — an extension to schema.org JSON-LD for brand AI readiness.

Live: [brandrosetta.org](https://brandrosetta.org)
Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## What this repo is

The source for the brandrosetta.org reference site. Four pages:

- `/` — overview, namespace, version
- `/vocab` — full property reference
- `/spec` — the complete specification
- `/implement` — copy-paste JSON-LD examples

The site implements its own standard: Foundation-tier Brand Rosetta JSON-LD on every page, plus a structured `llms.txt`.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

## Build

```bash
npm run build
```

All pages are static-prerendered. No database, no API, no auth.

## Contributing

Issues and pull requests welcome. The standard itself is versioned separately — see [the specification](https://brandrosetta.org/spec) for the versioning policy.

## Attribution

Brand Rosetta was created by Oliver Norton and published by [Nodal Strategy](https://nodalstrategy.com). Free to implement, adapt, and build upon with attribution under CC BY 4.0.
