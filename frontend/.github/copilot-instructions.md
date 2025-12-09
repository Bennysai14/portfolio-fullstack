<!--
Guidance for AI coding agents working on this repository.
Keep this file concise and actionable — reference specific files and patterns.
-->
# Copilot instructions for venkatasai-portfolio-frontend

Summary
- This is a small Create React App (CRA) frontend for a personal portfolio.
- Main entry: `src/index.js` → `src/App.js`. UI is composed from `src/components/*`.

Quick commands
- Start dev server: `npm start` (uses `react-scripts start`).
- Build production bundle: `npm run build`.
- Run tests: `npm test`.

Architecture & conventions (what matters)
- Single-page React app built with CRA (`react-scripts@5.0.1`, React 19).
- Component structure: `src/components/*.jsx` (present mixture of `.js` and `.jsx` files).
  - `App.js` imports and renders `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Contact`.
  - Anchor-based navigation is used (ids like `#about`, `#skills`, `#projects`, `#experience`, `#contact`) — preserve these ids when renaming or refactoring.
- Styling: combination of `src/App.css`, `src/index.css` and inline styles inside components. Prefer keeping visual changes in `App.css` unless small, one-off styles.

Integration points & external dependencies
- Contact form posts to a backend URL in `src/components/Contact.jsx`:
  - Default POST URL: `http://localhost:8081/venkatasai-portfolio-api/api/contact`.
  - If you update the endpoint, change the URL in `Contact.jsx` and ensure backend CORS allows the dev origin (http://localhost:3000).
- Projects mention using LLM providers (OpenAI / Anthropic) and backend services (Java/Spring Boot, MySQL). These are descriptive examples; the frontend has no direct LLM integration besides project text.

Typical tasks & where to make changes (examples)
- Add a project card: edit `src/components/Projects.jsx` and follow existing JSX card structure (title, body, meta).
- Change navigation items: edit `src/components/Navbar.jsx` — links are rendered from a small inline array.
- Modify contact behavior: update `src/components/Contact.jsx` (fetch, request headers, payload). Keep `Content-Type: application/x-www-form-urlencoded` if the backend expects URL-encoded body.
- Add global styles or tweak layout: edit `src/App.css` / `src/index.css`. Small, component-specific tweaks can remain inline.

Debugging tips
- If UI doesn't update in dev, check console and the React Fast Refresh output; run `npm start`.
- For contact form failures: open the browser Network tab, inspect the POST to `localhost:8081`, check CORS and response JSON (expecting `{ status: 'ok' }` or `status: 'error'`).
- To test build issues: run `npm run build` locally; CRA will surface common errors. Use the stack traces to find the breaking component.

Patterns to preserve
- Preserve anchor IDs used by the nav (`#about`, `#skills`, `#projects`, `#experience`, `#contact`).
- Components follow simple presentational style — avoid introducing heavy state libraries unless needed.
- Keep filenames and exports consistent (default exports for each component) to avoid refactor churn.

Prompts for the agent (examples)
- "Add a new project card for X: update `src/components/Projects.jsx` with title, description, and tech meta. Keep layout consistent with existing `.card` styles." 
- "Change contact form to send JSON instead of x-www-form-urlencoded: update `Contact.jsx` fetch headers and body, and note backend change required at `/api/contact`."

What I could not infer (ask the owner)
- Backend API contract details for the contact endpoint (exact response schema, auth/CORS rules).
- Any CI/CD pipeline configs (there are references to GitHub Actions in project descriptions but no workflow files found).

If you edit this file
- Merge any local `.github/copilot-instructions.md` content instead of overwriting — preserve author notes.

---
Last scanned files: `package.json`, `README.md`, `src/App.js`, `src/index.js`, `src/components/*` (Navbar, Hero, About, Skills, Projects, Experience, Contact).
