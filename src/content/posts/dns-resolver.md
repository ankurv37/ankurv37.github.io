---
slug: dns-resolver
title: "DNS Resolution From Scratch: TCP and DNS-over-HTTPS in Go"
excerpt: "A custom DNS resolver implementing both traditional DNS-over-TCP and modern DNS-over-HTTPS (DoH) using raw protocol encoding in Go."
date: "2024-12-15"
readTime: "10 min read"
tags: ["DNS", "Go", "Networking", "DoH", "RFC 8484", "Systems Programming"]
featured: false
---

## Overview

This project implements a DNS resolver from the ground up in Go, supporting two transport methods: traditional DNS over TCP and modern DNS-over-HTTPS (DoH). Rather than using high-level DNS libraries as black boxes, the code manually constructs, sends, and parses DNS wire-format messages.

## DNS Over TCP Implementation

The TCP resolver follows RFC 1035 for DNS message framing:

1. Construct a dns.Msg with the query domain, record type (A), and recursion desired flag
2. Pack the message into wire format (binary encoding)
3. Prefix with a 2-byte big-endian length field (TCP requires this since DNS messages have variable length — unlike UDP where each datagram is one message)
4. Send over a raw TCP connection to port 53
5. Read the 2-byte response length, then read exactly that many bytes
6. Unpack the response back into structured data

The 2-byte length prefix is the key difference between TCP and UDP DNS. UDP messages are self-delimiting (one message per datagram), but TCP is a stream protocol — without the length prefix, the receiver cannot know where one DNS message ends and the next begins.

## DNS Over HTTPS (DoH)

The DoH implementation follows RFC 8484:

1. Pack the DNS query into wire format (same as TCP)
2. Base64url-encode the binary message (no padding, per spec)
3. Send as an HTTP GET request to the DoH endpoint with ?dns= query parameter
4. Set `Accept: application/dns-message` header
5. Parse the response body as raw DNS wire format

The project uses Cloudflare's DoH endpoint (cloudflare-dns.com/dns-query) as the resolver. DoH provides privacy advantages since DNS queries are encrypted within HTTPS and are indistinguishable from normal web traffic.

## Key Library - miekg/dns

The miekg/dns library handles the DNS message packing/unpacking (serialization to/from wire format). This is the same library used by CoreDNS, the DNS server that ships with every Kubernetes cluster. It provides type-safe representations of all DNS record types.

## What I Learned

Implementing DNS at the wire level revealed how much complexity hides behind a simple dig command. The TCP length-prefix framing pattern appears everywhere in network protocols (TLS records, HTTP/2 frames, gRPC). Understanding DoH showed me how privacy-preserving protocols layer on top of existing infrastructure — DNS queries become indistinguishable from HTTPS traffic to network observers.
