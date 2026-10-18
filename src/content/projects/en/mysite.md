---
title: This Website
period: "2024 - Current"
description: "Personal portfolio featuring a technical sketch aesthetic, i18n, Astro, and an integrated AI assistant"
categories: ['personal']
technologies: ['Astro', 'TypeScript', 'CSS', 'Gemini AI', 'Cloudflare Workers', 'GitHub Actions']
github: https://github.com/joao-zip/joao-zip.github.io
site: /
---

This portfolio was designed not only as a showcase of projects, but as a practical reflection of the "builder of ideas" philosophy: bringing together solid software engineering, artisan attention to detail, and modern web technologies.

Built with Astro and automatically deployed to GitHub Pages via CI/CD with GitHub Actions, the website pairs top-tier performance (zero unnecessary client-side JavaScript by default) with an authorial visual and interactive identity.

**Key Technical Highlights & Features:**
- **Craftsman Workbench & Patent Sketch Aesthetic:** A visual identity inspired by classic patent blueprints, technical sketches, and *The Pragmatic Programmer* workbench concept. Built with custom SVGs and pure CSS micro-interactions — featuring a cutting mat with millimeter rulers, angle protractor, articulated drafting compass, rack-and-pinion gear theme toggle, and a wind-up automaton chat button.
- **Integrated AI Assistant (Zippy):** An interactive real-time chat widget powered by the Google Gemini API through a serverless Cloudflare Worker proxy. Built-in build-time semantic context (`context.md`) enables the agent to answer visitor questions regarding my experience, projects, and skills.
- **Internationalization (i18n):** Full bilingual support (Portuguese and English) with dynamic routing (`[...lang]`), fallbacks, and typed content management powered by Astro Content Collections with Zod schemas.
- **Frontend Architecture & Accessibility:** Semantic HTML5 structure, 100% responsive layout across all screens (desktop, tablet, and mobile), optimized contrast, full keyboard navigation, and fine-tuned Core Web Vitals.
