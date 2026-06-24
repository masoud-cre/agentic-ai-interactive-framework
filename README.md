# Agentic AI Interactive Framework

An interactive native web diagram for exploring the Agentic AI landscape.

The app reconstructs the original whiteboard concept as editable HTML, CSS, and JavaScript rather than using the JPEG as the product surface. Each concept is clickable and opens a detail panel with explanation, examples, and related concepts.

## Run locally

```bash
python3 -m http.server 8123
```

Then open:

```text
http://127.0.0.1:8123/
```

## Current experience

- Native diagram with 50 clickable concept nodes.
- Search and domain filters.
- Relationship highlighting between connected concepts.
- Detail inspector with summary, why it matters, examples, and related topics.
- No JPEG dependency in the user-facing app.

## Report

A fuller product and technical report is available in `REPORT.md`.

## Source artifacts

The original JPEG and OCR/Figma experiments are still in the workspace for reference, but the website itself is built from native web code:

- `index.html`
- `styles.css`
- `app.js`
