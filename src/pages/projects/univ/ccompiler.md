---
layout: ../../../layouts/MarkdownProject.astro

title: Compilador C-
periodo: "Ago/2025 - Dez/2025"
descricao: "Compilador para linguagem C-, feito com Flex e Bison"
categories: ['univ']

github: https://github.com/joao-zip/cminus-compiler
---

Compilador para a linguagem C- (subconjunto de C), desenvolvido para a disciplina de Compiladores. O projeto envolveu todas as fases clássicas de um compilador: análise léxica, sintática, semântica e geração de código intermediário.

**Desafios Técnicos:**
- Implementação inicial de lexer usando autômato finito com tabela de transições, demonstrando compreensão dos fundamentos teóricos
- Tentativa de parser descendente recursivo antes de migrar para parser gerado (Bison), evidenciando conhecimento de diferentes abordagens de parsing
- Integração entre Flex (análise léxica) e Bison (análise sintática) para construir pipeline de compilação robusto
- Tratamento de erros e geração de mensagens diagnósticas úteis

**Tecnologias:**
- C para implementação do compilador
- Flex e Bison para geração de analisadores
- Estruturas de dados para tabela de símbolos e árvore sintática abstrata (AST)

**Aprendizados Aplicáveis:**
Este projeto reforçou a importância de avaliar tradeoffs entre implementação manual (maior controle) versus uso de ferramentas especializadas (maior produtividade). A experiência com compiladores também desenvolveu minha capacidade de modelar problemas complexos através de estruturas de dados adequadas e pensar em termos de transformações sucessivas de representações.
