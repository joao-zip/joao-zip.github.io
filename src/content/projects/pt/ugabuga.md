---
title: ugabuga
period: "Jul/2026"
description: "Treinador de digitação para terminal inspirado no Monkeytype, construído em Go"
img: /ugabuga_logo.png
categories: ['personal', 'opensource']
technologies: ['Go', 'Bubble Tea', 'TUI', 'CLI']
github: https://github.com/joao-zip/ugabuga
---

O **ugabuga** é um treinador de digitação para terminal feito em Go, criado para trazer a experiência e a fluidez do *Monkeytype* direto para a linha de comando. A ideia foi ter uma ferramenta leve e prática para treinar digitação sem precisar abrir o navegador.

O aplicativo conta com uma interface interativa no terminal (TUI), oferecendo diferentes modos de treino, histórico de tentativas e métricas em tempo real.

**Recursos:**
- **Modos de Prática**: Treinos por contagem de palavras (10, 25, 50 ou 100 palavras) ou por tempo (15s, 30s, 60s ou 120s), com visualização do texto em rolagem contínua de 3 linhas.
- **Mecânicas de Digitação**: Suporte a *space-skipping* (ao errar uma palavra, pressionar espaço pula direto para a próxima) e reinício rápido do teste com a tecla `Tab`.
- **Desafio Diário**: Teste diário de 25 palavras gerado a partir da data atual (o mesmo teste para todo mundo no mesmo dia), com contador de dias consecutivos (*daily streak*).
- **Estatísticas e Gráfico ASCII**: Registro local das sessões em JSON (`~/.config/ugabuga/history.json`), exibindo recordes de WPM, precisão média e um gráfico em ASCII com o histórico dos últimos testes.
- **Suporte Bilíngue**: Interface disponível em Português e Inglês, com tradução dinâmica de menus, estatísticas e dicas de digitação.
- **Temas e Dicas**: Temas de cores selecionáveis (Carbon, Dracula, Nord e Sakura) e um carrossel interativo com dicas ergonômicas e técnicas de digitação (posição das mãos no *Home Row*, memória muscular, etc.).

**Desafios Técnicos:**
- **Desenvolvimento de TUI com Bubble Tea**: Uso do framework Bubble Tea e da biblioteca Lip Gloss (da Charm) seguindo a Elm Architecture, mantendo estado, eventos do teclado e ciclo de renderização bem separados.
- **Métricas e Concorrência**: Controle de timers assíncronos para testes por tempo e cálculo contínuo de WPM líquido, bruto e porcentagem de acurácia a cada tecla pressionada.
- **Renderização e Compatibilidade de Terminal**: Criação de componentes visuais em texto (como o gráfico de desempenho e as quebras de linha dinâmicas) com boa legibilidade em diferentes tamanhos de janela e emuladores de terminal.
