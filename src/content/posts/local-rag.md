---
slug: local-rag
title: "Building a Local RAG Pipeline: From TF-IDF to Vector Search"
excerpt: "A progression through text retrieval techniques — TF-IDF, Word2Vec, BERT embeddings — culminating in a full RAG pipeline with LangChain, ChromaDB, and Ollama."
date: "2025-01-20"
readTime: "13 min read"
tags: ["RAG", "LangChain", "ChromaDB", "Embeddings", "TF-IDF", "Word2Vec", "BERT", "Python"]
featured: true
---

## Overview

This project builds a complete Retrieval-Augmented Generation (RAG) pipeline that runs entirely locally — no cloud APIs, no data leaving your machine. But more importantly, it implements each stage of the text retrieval evolution from scratch, providing deep understanding of why modern vector search works.

## Stage 1 - TF-IDF From Scratch

Term Frequency-Inverse Document Frequency is the simplest form of document relevance scoring. The implementation computes:

- **TF(t, d)** = count(t in d) / total_words(d) — how often a term appears in a document
- **IDF(t)** = log((N+1) / (df(t)+1)) + 1 — penalizes terms that appear in many documents
- **TF-IDF(t, d)** = TF * IDF — the final relevance score

This works for keyword matching but fails for semantic similarity. "car" and "automobile" score zero similarity.

## Stage 2 - Word2Vec (CBOW)

The Word2Vec implementation uses a Continuous Bag of Words (CBOW) model built with PyTorch. It learns dense vector representations where semantically similar words cluster together. The training loop uses:

- Sliding context windows of size 2
- NLLLoss (Negative Log Likelihood)
- Adam optimizer
- GPU/CPU device flexibility via torch.device

Now words have geometric relationships: vec("king") - vec("man") + vec("woman") is close to vec("queen").

## Stage 3 - BERT Embeddings

Using HuggingFace's transformers library, the project generates contextual embeddings from bert-base-uncased. Unlike Word2Vec, BERT embeddings are context-dependent — the same word gets different vectors depending on surrounding text. The implementation uses mean pooling over the last hidden state to get fixed-size sentence embeddings.

## Stage 4 - Full RAG Pipeline

The production RAG pipeline chains together:

1. **PyPDFLoader** — loads and parses PDF documents
2. **RecursiveCharacterTextSplitter** — chunks documents (1000 chars, 200 overlap) for effective retrieval
3. **HuggingFace sentence-transformers (all-MiniLM-L6-v2)** — generates embeddings
4. **ChromaDB** — stores and indexes vectors locally with persistent storage
5. **Ollama (llama3:8b)** — generates answers grounded in retrieved context

The retriever fetches the top-3 most similar chunks, injects them as context into a structured prompt, and the LLM generates an answer constrained to the provided information.

## What I Learned

Building each retrieval technique from scratch revealed the progression from sparse to dense representations. TF-IDF is fast but brittle; Word2Vec captures semantics but not context; BERT captures context but is expensive. The RAG pattern elegantly combines retrieval (fast, accurate) with generation (fluent, flexible). The chunk_size and chunk_overlap parameters are surprisingly critical — too small and you lose context, too large and retrieval becomes noisy.
