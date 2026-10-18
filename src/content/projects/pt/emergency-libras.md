---
title: Emergency LIBRAS
period: "2024 - 2026"
description: "Reconhecimento em vídeo de frases de emergência em LIBRAS com Deep Learning (TCC na UNIFESP)"
categories: ['univ', 'opensource']
technologies: ['Python', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Optuna', 'Deep Learning']
github: https://github.com/joao-zip/emergency-libras
---

Projeto desenvolvido como meu **Trabalho de Conclusão de Curso (TCC)** em Ciência da Computação na **UNIFESP**. O objetivo foi criar uma tecnologia assistiva para que pessoas surdas possam acionar serviços de emergência (como SAMU, Polícia Militar e Bombeiros) de forma autônoma, usando a Língua Brasileira de Sinais (LIBRAS).

Em situações de emergência, os canais tradicionais baseados em chamadas de voz criam uma barreira de comunicação crítica para pessoas surdas. Para enfrentar esse problema, o projeto trabalhou na coleta e no processamento de um dataset com vídeos de pessoas sinalizando 26 frases essenciais de socorro (como relatos de acidentes, dores graves ou pedidos de ajuda), treinando modelos de *deep learning* para reconhecer essas frases diretamente da câmera.

**Como o Projeto Funciona:**
- **Reconhecimento de Vídeo com R(2+1)D-18**: Como um sinal em LIBRAS envolve tanto a pose das mãos e expressões faciais quanto o movimento ao longo do tempo, usamos a arquitetura R(2+1)D-18 (pré-treinada no Kinetics-400). Ela separa as convoluções espaciais (o que aparece em cada quadro) das temporais (como o gesto se move entre os quadros), sendo muito eficiente para entender a dinâmica dos sinais.
- **Ajuste Fino (Fine-Tuning)**: Testamos diferentes estratégias de congelamento de camadas da rede, adaptando os pesos pré-treinados para focar especificamente nas 26 frases de emergência.
- **Preparação e Variação dos Vídeos**: Com OpenCV, cada vídeo é amostrado em 16 frames com técnicas de *data augmentation* (mudanças de velocidade de reprodução, pequenos giros, espelhamento e variações de iluminação) para ensinar o modelo a reconhecer o sinal mesmo em condições imperfeitas de gravação.
- **Validação com Pessoas Diferentes (LOPO)**: Cada pessoa tem seu próprio estilo, ritmo e proporção física ao sinalizar. Para garantir que o modelo não "decorasse" o rosto ou o fundo do vídeo de quem estava sinalizando, usamos validação *Leave-One-Person-Out* (LOPO): o modelo é avaliado com gravações de uma pessoa que ele nunca viu durante o treino.
- **Busca de Hiperparâmetros com Optuna**: Ajuste automatizado de taxa de aprendizado, regularização e parâmetros de aumento de dados para maximizar o F1-score entre as classes.
- **Acompanhamento com CometML**: Rastreamento visual das métricas de treino, curvas de perda e matrizes de confusão ao longo dos testes.

**Desafios Técnicos e Aprendizados:**
- **Trabalhar com Dados de Vídeo**: Lidar com vídeos no PyTorch exige cuidado com o consumo de memória da GPU e carregamento rápido de dados. Foi preciso montar um pipeline eficiente com OpenCV para carregar e transformar os frames sob demanda.
- **Generalização Entre Pessoas**: Fazer a rede entender o significado do sinal independentemente de quem está na frente da câmera (diferenças de enquadramento, velocidade de movimento e características físicas) foi o maior desafio do treinamento.
- **Impacto Social Real**: Aplicar visão computacional para resolver um problema concreto de acessibilidade, criando uma base técnica que pode ajudar a salvar vidas e dar autonomia para a comunidade surda.
