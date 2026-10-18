---
title: Este site
period: "2024 - Atual"
description: "Portfólio pessoal com estética de croqui técnico, i18n, Astro e assistente de IA integrado"
categories: ['personal']
technologies: ['Astro', 'TypeScript', 'CSS', 'Gemini AI', 'Cloudflare Workers', 'GitHub Actions']
github: https://github.com/joao-zip/joao-zip.github.io
site: /
---

Este portfólio foi concebido não apenas como uma vitrine de projetos, mas como uma extensão prática da filosofia de "construtor de ideias": a união entre engenharia de software sólida, atenção artesanal aos detalhes e tecnologias modernas.

O site foi desenvolvido com Astro e possui deploy automatizado no GitHub Pages através de CI/CD com GitHub Actions. Ele combina alta performance (zero JavaScript desnecessário por padrão) com uma identidade visual e interativa autoral.

**Destaques e Recursos Técnicos:**
- **Estética de Bancada e Croqui Técnico:** Identidade visual inspirada em patentes clássicas, rascunhos técnicos e na bancada de trabalho do *The Pragmatic Programmer*. Inclui ilustrações vetoriais (SVG) com microinterações em CSS — bancada com réguas milimetradas, marcações angulares com transferidor, compasso articulado, alternador de tema mecânico com engrenagem/cremalheira e autômato a corda.
- **Assistente IA Integrado (Zippy):** Widget de chat em tempo real alimentado pela API do Google Gemini através de um Cloudflare Worker proxy serverless. O agente possui contexto semântico compilado em tempo de build (`context.md`) sobre a minha trajetória, projetos e competências, dialogando com os visitantes de forma natural.
- **Internacionalização (i18n):** Suporte nativo e completo a Português e Inglês com rotas dinâmicas (`[...lang]`), detecção e organização tipada com Astro Content Collections e validação via Zod.
- **Engenharia Frontend e Acessibilidade:** Arquitetura semântica em HTML5, layout 100% responsivo (desktop, tablet e mobile), contraste otimizado, suporte a navegação por teclado e foco em métricas de Core Web Vitals.
