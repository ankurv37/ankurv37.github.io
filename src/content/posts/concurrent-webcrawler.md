---
slug: concurrent-webcrawler
title: "Concurrent Web Crawler in Go: Goroutines, Channels, and Rate Limiting"
excerpt: "A depth-bounded, rate-limited web crawler showcasing Go's concurrency primitives — goroutines, channels, sync.Mutex, and WaitGroup."
date: "2024-10-15"
readTime: "10 min read"
tags: ["Go", "Concurrency", "Goroutines", "Channels", "Web Crawler", "Systems Design"]
featured: false
---

## Overview

This project implements a concurrent web crawler in Go that demonstrates proper use of goroutines, channels, mutexes, and WaitGroups. It handles cycle detection, depth limiting, rate limiting, and concurrent error collection — the exact concurrency patterns that come up in systems design interviews.

## Architecture

The crawler struct encapsulates all state:

- **maxDepth**: bounds the BFS traversal depth
- **rateLimiter**: a time.Tick channel that throttles requests (e.g. 5 per second)
- **visited map + visitedMu sync.Mutex**: thread-safe cycle detection
- **results chan string**: collected URLs flow here
- **errChan chan error**: buffered channel for non-blocking error reporting

## Concurrency Model

Each URL is crawled in its own goroutine. The crawl() method:

1. Checks depth bound — returns immediately if exceeded
2. Acquires the mutex, checks/marks the URL as visited, releases the mutex
3. Sends the URL to the results channel
4. Waits on the rate limiter channel (blocks until the next tick)
5. Fetches the URL's links
6. Spawns child goroutines for each discovered link (wg.Add(1) before each go statement)

The run() method orchestrates everything:

- Starts the initial crawl in a goroutine
- Launches a goroutine that waits for all crawlers to finish (wg.Wait()), then closes both channels
- Collects results and errors from their respective channels

## Key Design Decisions

- **Mutex over sync.Map**: The visited set uses sync.Mutex with a plain map rather than sync.Map. This is actually the Go team's recommendation for cases with few, known keys — sync.Map is optimized for disjoint read/write patterns.
- **Buffered error channel**: errChan has buffer size 10 to prevent goroutines from blocking on error reporting, which could cause deadlocks.
- **Rate limiter via time.Tick**: Creates a channel that delivers values at fixed intervals. Each goroutine blocks on `<-c.rateLimiter` before fetching, naturally throttling the entire crawler.

## Test Suite

The test file covers:

- Basic fetch validation
- Zero and negative depth bounds
- Depth-one traversal with expected URL count
- Cycle detection (A links to B, B links to A)
- Error handling (fetch failures still return partial results)
- Concurrent safety under depth-2 full crawl
- Rate limiting verification via elapsed time assertions

## What I Learned

This project crystallized Go's concurrency philosophy: share memory by communicating. The WaitGroup + channel close pattern is idiomatic for fan-out/fan-in scenarios. The biggest gotcha was ensuring wg.Add(1) is called before the goroutine starts (not inside it) — otherwise the Wait() can return before the goroutine increments the counter, causing missed URLs.
