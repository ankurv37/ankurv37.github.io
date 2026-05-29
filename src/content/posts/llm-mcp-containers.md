---
slug: llm-mcp-containers
title: "MCP Servers, Local LLMs, and Linux Containers From Scratch"
excerpt: "Three projects in one repo: building an MCP server with Gmail integration, serving DeepSeek-R1 locally via FastAPI, and implementing Linux containers using raw syscalls in Go."
date: "2025-02-15"
readTime: "14 min read"
tags: ["MCP", "LLM", "FastAPI", "Linux Containers", "Go", "Python", "DeepSeek", "Gmail API"]
featured: true
---

## Overview

This repository is a Swiss Army knife of systems programming and AI infrastructure. It contains three distinct but complementary projects: (1) a Model Context Protocol (MCP) server that integrates with Gmail, (2) a local LLM inference server using DeepSeek-R1, and (3) a minimal Linux container runtime written in Go.

## Part 1 - MCP Server with Gmail Integration

The MCP server uses the FastMCP Python framework to expose tools, resources, and prompts to AI agents. The key tool is write_email_draft, which creates Gmail drafts via the Google API. The server defines:

- **Prompts**: Template-based system instructions for an AI assistant persona called AVA
- **Resources**: Email examples (3-way intros, call follow-ups) that agents can reference
- **Tools**: The Gmail draft creation endpoint with full OAuth2 authentication

The Gmail integration uses google-api-python-client with OAuth2 credentials, handling token refresh automatically. The MCP transport layer uses stdio, making it compatible with any MCP client.

## Part 2 - Local LLM Inference with DeepSeek-R1

The deepseek.py file serves the DeepSeek-R1-Distill-Llama-8B model (Q4_K_M quantized GGUF format) through a FastAPI endpoint. Key design choices:

- **llama_cpp for inference**: runs quantized models on CPU without requiring a GPU
- **Configurable generation parameters**: temperature, top_p, max_tokens, stop sequences
- **2048 token context window** with 4 CPU threads

This demonstrates how to serve production-quality LLM inference locally without cloud dependencies — critical for privacy-sensitive applications.

## Part 3 - Linux Containers From Scratch in Go

The container.go file implements a minimal container runtime using raw Linux syscalls. It creates isolated process namespaces using:

- **CLONE_NEWUTS**: Separate hostname namespace
- **CLONE_NEWPID**: Isolated process ID tree (PID 1 inside container)
- **CLONE_NEWNS**: Mount namespace isolation

The child process then uses pivot_root to switch the root filesystem, providing full filesystem isolation. This is the same foundational mechanism that Docker and containerd use under the hood.

## What I Learned

Building an MCP server taught me the emerging standard for AI agent tool-use. The container runtime deepened my understanding of Linux namespaces and how Docker actually works at the syscall level. Serving LLMs locally with quantized models showed the trade-offs between model size, inference speed, and quality.
