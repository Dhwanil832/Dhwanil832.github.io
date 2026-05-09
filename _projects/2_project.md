---
layout: page
title: Dynamic Safety Zone Monitoring
description: Multi-camera spatial reasoning for real-time hazard boundary reconfiguration in active melt shop environments
img: assets/img/safety_zone.png
importance: 2
category: research
related_publications: true
---

In active steel manufacturing environments, cranes, fork trucks, and personnel occupy shared floor space simultaneously. Static safety zone definitions cannot account for real-time equipment positioning — creating blind spots that precede exactly the kinds of near-miss and injury incidents documented in plant records.

**Our system** fuses four simultaneous camera perspectives using a rule-based spatial reasoning engine to dynamically redefine green zone boundaries in real time. The core logic: the outermost detected blocker position defines the boundary of the safe zone, with the entire section between the outermost blocker and the reference point classified as the active green zone. Zone boundaries update continuously as equipment moves.

**My contribution** was designing and implementing the rule-based spatial reasoning engine — the decision logic that determines what the system does with detected blocker positions to redefine zone boundaries. My co-author handled the detection pipeline (blockers, heavy mobile equipment, personnel).

This system is developed in partnership with the Steel Manufacturing Simulation and Visualization Consortium (SMSVC), deployed in the context of active melt shop operations.

{% cite toth2026safety %}