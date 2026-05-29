---
slug: pongwars
title: "Pong Wars: A Territory Conquest Game in Go with Ebiten"
excerpt: "A visual simulation where Day and Night balls battle for tile territory, built with Go and the Ebiten 2D game engine."
date: "2025-01-10"
readTime: "7 min read"
tags: ["Go", "Ebiten", "Game Development", "WebAssembly", "Simulation"]
featured: true
---

## Overview

Pong Wars is a territory-based simulation game where two teams (Day and Night) battle for control of a grid. Each team has 5 bouncing balls that conquer enemy tiles on contact. The game is built in Go using the Ebiten 2D game engine and compiled to WebAssembly for browser play.

## Architecture - The Game Loop

Ebiten implements the classic game loop pattern with three interface methods:

1. **Update()** — runs at 60 TPS (ticks per second), handles all game logic
2. **Draw()** — renders the current state to screen
3. **Layout()** — defines the logical screen dimensions (640x480)

This separation of logic and rendering is fundamental to game architecture — it ensures consistent simulation speed regardless of rendering performance.

## Collision and Conquest System

Each ball moves independently along X and Y axes. The collision detection uses grid-based spatial lookup:

- Calculate the next position
- Map pixel coordinates to grid tile indices (position / TileSize)
- If the target tile belongs to the enemy team: bounce the ball and conquer the tile
- If the target tile is friendly: allow the move
- Screen boundary collisions simply reverse velocity

Processing X and Y movement separately prevents corner-case bugs where diagonal movement could skip tiles.

## Technical Decisions

- Grid size of 20px tiles on a 640x480 screen gives a 32x24 grid — enough granularity to be visually interesting
- 10 balls total (5 per team) creates chaotic but balanced gameplay
- Ball speed of 8 pixels per tick ensures visible movement without frame-skipping artifacts
- The game compiles to WASM (GOOS=js GOARCH=wasm) for browser deployment via the portfolio site

## What I Learned

Building a game reinforced the importance of the update/draw separation pattern. The grid-based collision system is O(1) per ball per frame — no need for expensive spatial data structures when the world is discretized. Ebiten's simplicity makes it an excellent choice for Go game development.
