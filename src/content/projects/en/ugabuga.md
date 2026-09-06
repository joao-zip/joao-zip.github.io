---
title: ugabuga
period: "Jul/2026"
description: "Terminal-based typing trainer inspired by Monkeytype, built in Go"
img: /ugabuga_logo.png
categories: ['personal', 'opensource']
technologies: ['Go', 'Bubble Tea', 'TUI', 'CLI']
github: https://github.com/joao-zip/ugabuga
---

**ugabuga** is a terminal-based typing trainer written in Go, built to bring the fluid and minimalist experience of *Monkeytype* straight to the command line. The goal was to create a fast, distraction-free tool to practice typing without needing a web browser.

The application features an interactive terminal user interface (TUI) with customizable practice modes, local history tracking, and real-time performance feedback.

**Features:**
- **Practice Modes**: Word count challenges (10, 25, 50, or 100 words) and timed tests (15s, 30s, 60s, or 120s), displayed across a clean 3-line scrolling viewport.
- **Typing Mechanics**: Space-skipping support (pressing Space on a mistyped word skips ahead immediately) and instant test restart via the `Tab` key.
- **Daily Challenge**: A deterministic 25-word test generated from the current date (giving all users the same test on any given day), complete with streak tracking.
- **Stats & ASCII Chart**: Session history saved locally to JSON (`~/.config/ugabuga/history.json`), showing best WPM, average accuracy, and an ASCII chart tracking recent performance.
- **Bilingual Interface**: Seamless switching between Portuguese and English across all menus, statistics, and typing tips.
- **Themes & Tips**: Multiple color schemes (Carbon, Dracula, Nord, and Sakura) that work with terminal transparency, plus a carousel of tips covering touch typing fundamentals and ergonomics.

**Technical Challenges:**
- **TUI Development with Bubble Tea**: Implemented with Charm's Bubble Tea and Lip Gloss libraries following the Elm architecture, cleanly separating application state, keyboard inputs, and rendering passes.
- **Real-Time Metrics & Timing**: Managed asynchronous timers for timed tests alongside continuous calculation of raw WPM, error-adjusted net WPM, and accuracy per keystroke.
- **Terminal Rendering**: Built ASCII/Unicode visual elements, including the performance trend chart and dynamic line-wrapping viewports that adapt well to various terminal dimensions.
