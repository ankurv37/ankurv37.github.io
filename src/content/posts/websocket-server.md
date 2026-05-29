---
slug: websocket-server
title: "WebSocket Server in Go with Gorilla"
excerpt: "A real-time WebSocket server implementing the HTTP upgrade handshake, bidirectional messaging, and server-push notifications using Go and Gorilla WebSocket."
date: "2024-09-20"
readTime: "8 min read"
tags: ["Go", "WebSocket", "Gorilla", "Real-Time", "Networking", "HTTP"]
featured: false
---

## Overview

This project implements a WebSocket server in Go using the Gorilla WebSocket library. It demonstrates the full lifecycle of a WebSocket connection: HTTP upgrade handshake, bidirectional message exchange, binary message rejection, and server-initiated push notifications.

## How WebSockets Work

WebSocket is a protocol that provides full-duplex communication over a single TCP connection. Unlike HTTP's request-response model, either side can send messages at any time. The connection lifecycle:

1. Client sends an HTTP GET with `Upgrade: websocket` and `Connection: Upgrade` headers
2. Server responds with 101 Switching Protocols
3. The TCP connection is now a WebSocket — both sides can send frames independently
4. Either side can close the connection with a close frame

## Server Architecture

The server uses the http.Handler interface pattern:

- **webSocketHandler struct** holds a websocket.Upgrader
- **ServeHTTP** upgrades the HTTP connection, then enters a read loop
- Binary messages are rejected with an error message (text-only protocol for this use case)
- The magic word "start" triggers server-push mode: the server sends numbered notifications every 2 seconds indefinitely

The Gorilla WebSocket library handles:

- The HTTP-to-WebSocket upgrade (parsing headers, sending 101 response)
- Frame encoding/decoding (WebSocket messages are framed with opcodes, length, masking)
- Ping/pong keepalive
- Thread-safe writes (one writer at a time per connection)

## Message Types

WebSocket defines several frame types:

- **TextMessage (opcode 1)**: UTF-8 encoded text
- **BinaryMessage (opcode 2)**: arbitrary bytes
- **CloseMessage (opcode 8)**: connection termination
- **PingMessage/PongMessage (opcodes 9/10)**: keepalive

This server explicitly handles text vs binary, demonstrating protocol-level message type awareness.

## Server-Push Pattern

When the client sends "start", the server enters an infinite loop sending "Notification N" every 2 seconds. This is a common pattern for:

- Real-time dashboards
- Live feeds (stock prices, chat messages)
- Push notifications

Unlike HTTP polling (which creates a new TCP connection per request) or long-polling (which holds connections open waiting), WebSocket provides true bidirectional streaming with minimal overhead — just 2-6 bytes of framing per message.

## What I Learned

Building a WebSocket server from the handler level revealed how much complexity HTTP/2 and gRPC abstract away. The upgrade handshake is elegant — it reuses the existing HTTP connection rather than establishing a new one. The key operational concern is connection lifecycle management: each WebSocket is a long-lived TCP connection, so server memory scales linearly with connected clients. In production, you need connection limits, heartbeat timeouts, and graceful shutdown.
