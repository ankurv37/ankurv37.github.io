---
slug: microgpt
title: "Training a GPT From Scratch in Pure Python"
excerpt: "A zero-dependency implementation of the GPT architecture — autograd, multi-head attention, Adam optimizer, and inference — all in 200 lines of pure Python."
date: "2025-02-01"
readTime: "15 min read"
tags: ["GPT", "Transformers", "Autograd", "Deep Learning", "Python", "From Scratch"]
featured: true
---

## Overview

Inspired by Andrej Karpathy's educational approach, this project implements a complete GPT (Generative Pre-trained Transformer) from scratch using only Python standard library modules: os, math, and random. No PyTorch, no NumPy — every matrix multiplication, every gradient, every optimizer step is explicit.

## Custom Autograd Engine

The foundation is the Value class — a scalar-level automatic differentiation engine. Each Value holds:

- **data**: the forward-pass scalar result
- **grad**: the derivative of the loss with respect to this node
- **_children**: parent nodes in the computation graph
- **_local_grads**: local derivatives (Jacobian entries)

All arithmetic operators (+, *, **, /) are overloaded to build a directed acyclic graph (DAG). The backward() method performs reverse-mode autodiff via topological sort — identical in principle to PyTorch's autograd, just operating on scalars instead of tensors. Memory is optimized using `__slots__`.

## Transformer Architecture

The model follows GPT-2 with simplifications:

- Token embeddings + positional embeddings (learned, not sinusoidal)
- RMSNorm instead of LayerNorm (simpler, no mean subtraction)
- Multi-head self-attention with Q/K/V projections and output projection
- MLP blocks with ReLU activation (instead of GeLU)
- Residual connections around both attention and MLP blocks

With n_embd=16, n_head=4, n_layer=1, and block_size=16, the model has a manageable parameter count for CPU training.

## Training Loop

The Adam optimizer is implemented from scratch with:

- First moment (mean) and second moment (variance) buffers
- Bias correction for both moments
- Linear learning rate decay over training steps

Each step processes a single document (character sequence), computes cross-entropy loss via softmax and negative log-likelihood, and backpropagates through the entire computation graph.

## Inference

Autoregressive generation maintains a KV cache across positions. Temperature-controlled sampling adjusts the softmax distribution — lower temperature means more deterministic output. Generation stops at the BOS token or max sequence length.

## What I Learned

Implementing every component from scratch — autograd, attention, softmax, Adam — gave me a visceral understanding of what frameworks like PyTorch abstract away. The key insight: transformers are fundamentally just repeated applications of linear algebra (matrix multiplies) and pointwise nonlinearities, connected by residual streams. The magic is in the attention mechanism's ability to dynamically route information between positions.
