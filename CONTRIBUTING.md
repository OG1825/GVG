# Contributing to GVG

Thanks for wanting to help! GVG is built by and for the community. Here's how to contribute.

## Ways to Contribute

- **Add a bounty**: Create a new project for builders to work on
- **Report bugs**: Found an issue? Open a GitHub issue
- **Fix code**: Submit a PR to improve the site
- **Improve docs**: Help others understand how to use GVG
- **Request features**: Suggest improvements via GitHub discussions

---

## 🎯 Adding a Bounty

1. Copy `BOUNTY_TEMPLATE.md` to `src/content/bounties/your-bounty-name.md`
2. Fill in all frontmatter fields (title, reward, difficulty, deadline, etc.)
3. Write a clear description with requirements and success criteria
4. Commit and push – GitHub Actions auto-deploys

**Tips for good bounties**:
- Be specific about what's needed (vague = disputes)
- Include success criteria (how do we judge if it's done?)
- Realistic timelines (4–8 weeks typical)
- Fair rewards (£500–£3,000+ based on scope)

See [BOUNTY_TEMPLATE.md](./BOUNTY_TEMPLATE.md) for a full example.

---

## 🐛 Report a Bug

1. Open a GitHub issue with:
   - What you expected to happen
   - What actually happened
   - How to reproduce it
   - Browser/device info
2. Add the `bug` label
3. Reference if it blocks a bounty

---

## 💡 Request a Feature

1. Open a GitHub discussion or issue
2. Describe the problem it solves
3. Why it matters for the community

---

## 🔧 Fix Code or Improve Docs

1. Fork the repo
2. Create a feature branch: `git checkout -b fix/typo-in-readme`
3. Make your changes
4. Test locally:
   ```bash
   npm run check    # Type checking
   npm run build    # Test production build
   ```
5. Commit with a clear message: `git commit -m "Fix: typo in bounty template"`
6. Push and open a PR

---

## Development Setup

```bash
# Clone the repo
git clone https://github.com/your-username/gvg-website.git
cd gvg-website

# Install dependencies
npm install

# Start dev server
npm run dev
# 👉 http://localhost:3000

# Before committing, run:
npm run check   # Type checking
npm run build   # Test production build
```

---

## Code Quality Standards

### What We Care About

✅ **Clarity**: Code is easy to understand  
✅ **Consistency**: Follows existing patterns  
✅ **No TODOs**: Everything is complete  
✅ **No console errors**: Clean builds  
✅ **Accessibility**: Works for everyone (keyboard, screen readers)  
✅ **Performance**: Fast page loads  

### Before Committing

```bash
npm run check   # TypeScript type checking
npm run build   # Test production build
```

**No TODOs allowed.** If you can't finish something, create a GitHub issue instead.

---

## Commit Message Style

**Good**:
```
Add: Birthday bounty for app launcher
Fix: Navigation links in mobile menu
Improve: Bounty search performance
Update: README with deploy steps
```

**Bad**:
```
update stuff
fix again
temp
```

---

## Pull Request Process

1. **Before opening PR**:
   - Fork the repo
   - Create a feature branch
   - Test locally: `npm run build` succeeds
   - No console errors

2. **Open PR with**:
   - Clear title: "Add: New bounty template"
   - Short description of what changed
   - Link to related issues if any

3. **Wait for review**: We'll check code quality and ask questions if needed

4. **Address feedback**: Push new commits (don't force-push)

5. **Merge**: We'll merge and GitHub Actions auto-deploys

---

## File Structure

```
src/
├── pages/              # Page routes (auto → URLs)
├── components/         # Reusable UI components
├── layouts/            # Base layout template
├── content/bounties/   # Bounty Markdown files
├── data/events.ts      # Event data
└── styles/global.css   # Tailwind + utilities
```

---

## Naming Conventions

- **Components**: PascalCase (`Button.astro`, `BountyCard.astro`)
- **Pages**: kebab-case (`my-page.astro`)
- **CSS classes**: kebab-case (`btn-primary`, `section-padding`)
- **Variables**: camelCase (`isOpen`, `handleClick`)
- **Functions**: camelCase (`fetchBounties()`)

---

## Adding a New Component

1. Create `src/components/MyComponent.astro`
2. Define props interface
3. Use TypeScript for logic
4. Astro markup in template

**Example**:
```astro
---
interface Props {
  title: string;
  href?: string;
}

const { title, href } = Astro.props;
---

<a href={href} class="text-accent hover:text-accent-dark">
  {title}
</a>
```

---

## Adding a New Page

1. Create `src/pages/my-page.astro`
2. Import `Layout` component
3. Use existing components where possible

**Example**:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="My Page">
  <section class="bg-white section-padding">
    <div class="container-custom">
      <!-- Content here -->
    </div>
  </section>
</Layout>
```

---

## Styling

- **Tailwind first**: Use utility classes
- **Minimal custom CSS**: Only in `src/styles/global.css` if necessary
- **Mobile-first**: Design for mobile, scale up with breakpoints
- **Consistency**: Reuse spacing, colours, patterns

---

## Questions?

- Open a GitHub discussion
- Ask in our community Discord
- Email [hello@gvg.example.com](mailto:hello@gvg.example.com)

We're here to help!

---

## Code of Conduct

Our community values respect, honesty, inclusion, and integrity. See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for details.

Violations may result in removal from the project.

---

Thanks for contributing! 🚀
