---
title: Goblin
period: "Mar/2026 - Jul/2026"
description: "Mutation testing tool and library for Go"
img: /goblin_logo.png
categories: ['univ', 'opensource']
technologies: ['Go', 'AST', 'Mutation Testing', 'CLI']
github: https://github.com/joao-zip/goblin
---

A mutation testing tool and library for Go, originally developed for the **Software Verification and Validation** course at UNIFESP and subsequently adapted to be used as a real-world library.

Goblin analyzes Go source code, generates syntactic mutations (modifying logical, arithmetic, relational operators, etc.), runs the test suite against each generated mutant, and reports which mutants survived — exposing gaps in the logical coverage of the existing tests.

**Key Features:**
- **Parallel Execution**: Support for concurrent execution using multiple workers to optimize test suite execution time.
- **CI Integration**: Option to enforce a minimum mutation score threshold (`--threshold`) to fail continuous integration builds.
- **Flexible CLI & Library**: Available both as a command-line tool (CLI) and an importable Go package.
- **Reports**: Generation of JSON reports for integration with external analysis tools.

**Technical Challenges & Learnings:**
- **AST Manipulation**: In-depth usage of Go's native packages (`go/ast`, `go/parser`, `go/printer`, `go/token`) to parse, manipulate, and rebuild Go Abstract Syntax Trees (ASTs).
- **Concurrency in Go**: Orchestrated concurrent workers to manage multiple subprocesses of `go test` running mutations in parallel without mutual interference.
- **API Design**: Refactoring an academic codebase into a professionally packaged library, making it clean, documented, and reusable by the open-source community.
