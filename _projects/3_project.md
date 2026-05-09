---
layout: page
title: AI-Assisted Accident Investigation
description: Conversational AI system for structured industrial safety incident reporting — from monolithic pipeline to multi-agent architecture
img: assets/img/aiaai.png
importance: 3
category: research
related_publications: true
---

Industrial safety incident reporting at steel manufacturing facilities relies on manual form completion by on-shift supervisors immediately after high-stress events — producing inconsistent, incomplete records across incident types spanning crane failures, pinch points, and equipment damage. The cognitive load and time pressure of the moment work directly against the quality of documentation.

**Version 1 (AISTech 2025)** replaced this manual process with a conversational AI system that guides supervisors through structured incident capture via natural dialogue. The system maintains context across multi-turn exchanges to extract incident classification, risk assessment, root cause analysis, and corrective action recommendations. My contribution was designing and implementing the conversational AI backend — a Django pipeline handling context retention, dialogue state management, and action sequencing. My co-author built the interface, session management, and administrative dashboard.

**Version 2 (targeting ACL)** evolves the architecture from a monolithic pipeline to a modular multi-agent system. Separate agents handle dialogue state, context retention, domain reasoning, and action sequencing — enabling more robust, scalable incident response. V2 also introduces an on-premise LLM evaluation benchmark for industrial agentic deployment, addressing the reliability requirements of safety-critical systems.

Both systems are developed in partnership with the Steel Manufacturing Simulation and Visualization Consortium (SMSVC).

{% cite pu2025aiaai %}