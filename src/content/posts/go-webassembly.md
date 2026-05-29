---
slug: go-webassembly
title: "Go WebAssembly: Running Go in the Browser"
excerpt: "Cross-compiling Go to WebAssembly and bridging Go functions to JavaScript using syscall/js for a browser-based JSON formatter."
date: "2024-11-20"
readTime: "8 min read"
tags: ["Go", "WebAssembly", "WASM", "JavaScript", "syscall/js", "Cross-Compilation"]
featured: false
---

## Overview

This project demonstrates Go-to-WebAssembly compilation — writing Go code that runs directly in the browser. The use case is a JSON formatter: paste raw JSON, and Go code running as WASM prettifies it with proper indentation. It includes both the WASM module and a Go HTTP server to serve the assets.

## How Go WASM Works

Go has first-class WASM support via cross-compilation:

- Set `GOOS=js GOARCH=wasm` to target the browser environment
- The Go compiler produces a .wasm binary
- wasm_exec.js (provided by the Go toolchain) is the JavaScript glue that bootstraps the Go runtime in the browser

The main.go in cmd/wasm/ registers a Go function as a global JavaScript function using syscall/js:

- `js.Global().Set("formatJSON", jsonWrapper())` exposes the function to `window.formatJSON`
- The channel pattern (`<-make(chan struct{})`) keeps the Go runtime alive indefinitely

## Bridging Go and JavaScript

The jsonWrapper() function creates a js.Func that:

1. Receives a JavaScript string argument via `args[0].String()`
2. Unmarshals into a Go `any` type (`json.Unmarshal`)
3. Re-marshals with indentation (`json.MarshalIndent` with 2-space indent)
4. Returns the prettified string back to JavaScript

Error handling is built in — invalid JSON returns the error message as a string rather than crashing the WASM module.

## Serving Architecture

The cmd/server/main.go is a minimal Go HTTP file server (`http.FileServer`) that serves the assets directory containing index.html, json.wasm, and wasm_exec.js on port 9000.

## What I Learned

Go's WASM support is surprisingly mature. The compilation is a single command, and syscall/js provides a clean bridge between Go and JavaScript. The main caveat is binary size — Go's runtime and garbage collector are bundled into the .wasm file (the JSON formatter produces a ~2.8MB binary). For computation-heavy tasks, the performance advantage over JavaScript is significant. For UI-heavy tasks, the JS interop overhead can negate the benefit. This project is the foundation for the WASM features in my portfolio site (the chaos engineering demo and GitHub activity visualizer both use Go WASM).
