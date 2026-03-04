# GVG Website

**Gompels Venture Guild** – A campus startup incubator that funds and ships real projects through bounty challenges and build nights.

Builders earn cash, portfolio credit, and professional endorsements. Sponsors get working software, fast delivery, and access to emerging talent.

- **Website**: [gompels.github.io/gvg-website](https://gompels.github.io/gvg-website)
- **Built with**: Astro + TypeScript + Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🚀 Local Development

### Quick Start
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# 👉 Opens http://localhost:3000
```

### Build & Test Production
```bash
# Build static site
npm run build

# Preview production build locally
npm run preview
```

### Type Check
```bash
npm run check  # Verify TypeScript and Astro
```

---

## 📁 Project Structure

```
src/
├── pages/              # Page routes (→ URLs)
├── components/         # Reusable UI (Button, Card, Badge, etc.)
├── layouts/            # Base layout template
├── content/bounties/   # Bounty Markdown files
├── data/events.ts      # Event data
└── styles/global.css   # Tailwind CSS + custom utilities
```

**Key pages**:
- `src/pages/index.astro` → `/` (home)
- `src/pages/bounties.astro` → `/bounties` (search & filter)
- `src/pages/bounties/[...slug].astro` → `/bounties/{bounty-name}` (detail)
- `src/pages/how-it-works.astro` → `/how-it-works`
- `src/pages/events.astro` → `/events`
- `src/pages/partners.astro` → `/partners`
- `src/pages/join.astro` → `/join`

---

## 📝 Adding Bounties

1. **Copy the template**:
   ```bash
   cp BOUNTY_TEMPLATE.md src/content/bounties/my-bounty-name.md
   ```

2. **Edit the Markdown file** with your bounty details in the frontmatter:
   ```yaml
   ---
   title: "Bounty Title"
   reward: 2500                # Amount in GBP
   sponsor: "Department/Company"
   difficulty: Intermediate   # Beginner, Intermediate, or Advanced
   status: Open                # Open, In Progress, or Shipped
   deadline: "2026-04-30"      # ISO date format
   updatedAt: "2026-03-04"     # ISO date format
   tags: ["tag1", "tag2"]
   repo: "https://github.com/..." (optional)
   demo: "https://demo.example.com" (optional)
   ---

   ## Overview
   Your bounty description...
   ```

3. **Commit & push**:
   ```bash
   git add src/content/bounties/my-bounty-name.md
   git commit -m "Add bounty: Bounty Title"
   git push origin main
   ```

**Bounty tips**:
- Write clear, specific requirements (ambiguous specs cause disputes)
- Include success criteria so judging is fair
- Realistic timelines: 4–8 weeks is typical
- Fair rewards: £500–£3,000+ based on scope

---

## 🚢 Deploy to GitHub Pages

### 1. Configure GitHub Pages

Go to your repository **Settings → Pages**:
- **Source**: Select "GitHub Actions"
- **Branch**: (leave as is)

### 2. Update Workflow (if needed)

The `.github/workflows/deploy.yml` file includes `BASE_URL: /gvg-website`. If your repo name is different, update this line:

```yaml
env:
  # Replace 'gvg-website' with your repository name
  BASE_URL: /your-repo-name
```

### 3. Deploy

Push to `main` branch:
```bash
git push origin main
```

**That's it!** GitHub Actions automatically:
1. Installs dependencies
2. Runs type checking
3. Builds the static site
4. Deploys to GitHub Pages

Your site will be live in ~2 minutes at: `https://your-username.github.io/your-repo-name`

---

## 🎨 Design & Styling

- **Utility-first CSS**: Tailwind CSS for all styling
- **No external UI libraries**: Pure HTML + Tailwind
- **Mobile-first**: Responsive design that scales beautifully
- **Accessibility**: WCAG considerations (semantic HTML, ARIA labels, focus states)
- **Performance**: Zero JavaScript framework overhead, pure static HTML

---

## 👥 Contributing

1. See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
2. Code quality standards, commit message style, PR process
3. We welcome bug reports, feature requests, and pull requests

**Before committing**:
```bash
npm run check   # Type checking
npm run build   # Test production build
```

---

## 📄 Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `astro.config.mjs` | Astro config (static site, base path) |
| `tsconfig.json` | TypeScript strict mode |
| `tailwind.config.mjs` | Tailwind CSS theme |
| `CONTRIBUTING.md` | Contributor guide |
| `BOUNTY_TEMPLATE.md` | Template for new bounties |
| `CODE_OF_CONDUCT.md` | Community values |
| `LICENSE` | MIT license |

---

## ❓ Common Issues

**Q: Site works locally but not on GitHub Pages**
A: Check `BASE_URL` in `.github/workflows/deploy.yml` matches your repo name.

**Q: Bounties not showing on /bounties page**
A: Ensure fronmatter in `.md` files exactly matches `src/content/config.ts` schema. Run `npm run check` to verify.

**Q: Build fails with TypeScript errors**
A: Run `npm run check` locally to see errors. Fix any type mismatches.

---

## 📚 Resources

- [Astro docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Markdown frontmatter](https://en.wikipedia.org/wiki/YAML#Front_matter)

---

## 📞 Support

- **Questions?** Check [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Found a bug?** Open a GitHub issue
- **Ideas?** Start a discussion

---

## 📄 License

MIT License – see [LICENSE](./LICENSE) file for details.

---

**Built with ❤️ by the GVG community.**
