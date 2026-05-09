---
layout: page
title: Novel-View Acoustic Synthesis
description: Feed-forward framework for viewpoint-accurate binaural audio synthesis without 3D reconstruction
img: assets/img/nvas.png
importance: 1
category: research
related_publications: true
---

Existing methods for novel-view acoustic synthesis (NVAS) depend on expensive per-scene 3D reconstruction pipelines — Structure-from-Motion, dense point maps, neural rendering — that are slow, fragile under sparse inputs, and impractical for real deployment. We rethink the problem from the ground up.

**Our approach** grounds spatial audio synthesis directly in feed-forward visual geometry, bypassing explicit 3D reconstruction entirely. Given a short video clip as input, our framework builds a multimodal context from reference views, combining visual semantics, estimated scene geometry, and acoustically grounded prototype embeddings. The Geometry-Grounded Acoustic Decoder (GGAD) then retrieves listener-conditioned acoustic transfer fields using cross-attention over this context.

**My contribution** was designing the output representation extracted from the VGGT feed-forward geometry model and formulating the query/key structure of the GGAD cross-attention mechanism — the architectural core that enables geometry-aware binauralization without requiring target-view images or dense point cloud reconstruction.

**Results** show our framework outperforms prior baselines across RWAVS and Replay-NVAS benchmarks in audio quality, efficiency, and robustness under sparse reference frames — while running significantly faster than reconstruction-dependent methods.

{% cite polra2026nvas %}