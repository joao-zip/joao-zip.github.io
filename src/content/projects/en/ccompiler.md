---
title: C- Compiler
period: "Aug/2025 - Dec/2025"
description: "Compiler for the C- language, built with Flex and Bison"
categories: ['univ']
github: https://github.com/joao-zip/cminus-compiler
---

Compiler for the C- language (a subset of C), developed for the Compilers course. The project covered all classic phases of a compiler: lexical analysis, syntactic analysis, semantic analysis, and intermediate code generation.

**Technical Challenges:**
- Initial lexer implementation using a finite automaton with transition tables, demonstrating understanding of theoretical foundations
- Attempted recursive descent parser before migrating to a generated parser (Bison), showing knowledge of different parsing approaches
- Integration between Flex (lexical analysis) and Bison (syntactic analysis) to build a robust compilation pipeline
- Error handling and generation of useful diagnostic messages

**Technologies:**
- C for compiler implementation
- Flex and Bison for analyzer generation
- Data structures for symbol table and abstract syntax tree (AST)

**Applicable Learnings:**
This project reinforced the importance of evaluating tradeoffs between manual implementation (more control) versus specialized tools (higher productivity). The experience with compilers also developed my ability to model complex problems through appropriate data structures and think in terms of successive representation transformations.
