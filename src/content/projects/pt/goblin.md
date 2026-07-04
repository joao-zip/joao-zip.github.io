---
title: Goblin
period: "Mar/2026 - Jul/2026"
description: "Ferramenta e biblioteca de testes de mutação para a linguagem Go"
img: /goblin_logo.png
categories: ['univ', 'opensource']
technologies: ['Go', 'AST', 'Mutation Testing', 'CLI']
github: https://github.com/joao-zip/goblin
---

Ferramenta de testes de mutação (Mutation Testing) para a linguagem Go, desenvolvida inicialmente para a disciplina de **Verificação e Validação de Software** na UNIFESP e posteriormente adaptada para uso como biblioteca real. 

O Goblin analisa o código-fonte Go, gera mutações sintáticas (alterando operadores lógicos, aritméticos, relacionais, etc.), executa a suíte de testes contra cada mutante gerado e relata quais mutantes sobreviveram — evidenciando lacunas de cobertura lógica nos testes existentes.

**Principais Recursos:**
- **Execução Paralela**: Suporte a execução concorrente usando múltiplos workers para otimizar o tempo de execução dos testes.
- **Integração de CI**: Opção de definir um limite mínimo de pontuação de mutação (`--threshold`) para falhar builds integrados continuamente.
- **Interface e CLI Flexíveis**: Disponível tanto como ferramenta de linha de comando (CLI) quanto como biblioteca Go importável.
- **Relatórios**: Geração de relatórios em formato JSON para integração com outras ferramentas de visualização.

**Desafios Técnicos e Aprendizados:**
- **Manipulação de AST**: Uso intensivo dos pacotes internos de Go (`go/ast`, `go/parser`, `go/printer`, `go/token`) para ler, modificar e reescrever a Árvore de Sintaxe Abstrata (AST) do código Go de forma segura.
- **Concorrência em Go**: Orquestração de workers concorrentes para gerenciar múltiplos subprocessos `go test` executando mutações paralelamente sem interferência mútua.
- **Design de APIs**: Refatoração do código de um projeto estritamente acadêmico para uma biblioteca empacotada de forma profissional, limpa e reutilizável pela comunidade.
