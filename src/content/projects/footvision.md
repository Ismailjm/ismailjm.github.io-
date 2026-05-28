---
title: "Footvision — Football Match Analyzer"
date: "2024-04"
summary: "Automatic football match analysis system that detects player movements from video, generates tactical maps, and supports strategic game analysis."
stack: ["Python", "PyTorch", "CNNs", "Pandas", "Matplotlib", "Seaborn", "OpenCV"]
links:
  github: "https://github.com/Ismailjm/footvision"
featured: true
---

Footvision is an end-to-end computer vision pipeline that turns raw match footage into structured tactical intelligence.

## Motivation

Football coaches and analysts spend hours rewatching footage to extract insights about player positioning and team formation. Footvision automates this process, making data-driven tactical analysis accessible without manual annotation.

## What it does

- **Player detection** — CNN-based object detection identifies players and the ball in every frame of a video sequence.
- **Tracking** — Detected bounding boxes are linked across frames to produce player trajectories throughout the match.
- **Tactical maps** — Trajectories are projected onto a 2D pitch map. Heatmaps, formation snapshots, and passing networks are generated using Pandas, Matplotlib, and Seaborn.

## Technical approach

The detection backbone is a convolutional neural network trained on football broadcast footage. Post-processing handles occlusion, camera panning, and team assignment (jersey colour clustering).
