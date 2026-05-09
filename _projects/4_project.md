---
layout: page
title: VLM Robustness Benchmark
description: Systematic evaluation of 20 vision-language models under simultaneous visual and linguistic degradation
img: assets/img/vlm_benchmark.png
importance: 4
category: research
related_publications: true
---

Vision-language models (VLMs) are increasingly deployed in systems that must interpret both visual and linguistic inputs simultaneously — yet their robustness under the degraded conditions common in real-world environments remains largely uncharacterized. A model that performs well on clean benchmarks may fail unpredictably when camera quality drops, lighting shifts, or operator language is informal or domain-specific.

**This benchmark** provides a systematic evaluation framework for 20 VLMs under controlled simultaneous visual and linguistic corruption conditions. Key contributions include a novel text corruption module that simulates realistic degradation in operator-generated language, and a structured evaluation pipeline that enables fine-grained analysis of failure modes across corruption types and model architectures.

**My role** is lead researcher — I conceived the benchmark, designed the evaluation framework, built the text corruption module, and am running the full evaluation across all 20 models.

This work is independent research, developed in collaboration with a co-architect based in San Jose. It addresses a fundamental reliability question that applies across industrial AI deployment, autonomous systems, and any multimodal pipeline operating in real-world conditions.

**Status:** In preparation — targeting IEEE TPAMI / IJCV.

{% cite chauhan2026vlmbenchmark %}