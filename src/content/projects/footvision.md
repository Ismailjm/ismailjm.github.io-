---
title: "Footvision — Football Match Analyzer"
date: "2024-07"
summary: "Automated football match analysis system that detects and tracks players from video, generates tactical maps, and visualises team performance metrics through an interactive dashboard."
stack: ["Python", "PyTorch", "YOLOv8", "Ultralytics", "OpenCV", "Streamlit", "Pandas", "Matplotlib", "NumPy", "Scikit-learn"]
links:
  github: "https://github.com/Ismailjm/Football-Match-Analyzer"
cover: "/projects/footvision-landing.png"
featured: true
---

Footvision is an end-to-end computer vision pipeline that turns raw match footage into structured tactical intelligence — from raw video to interactive tactical dashboards.

## What it does

Player and ball detection runs via **YOLOv8** (Ultralytics) in real time, identifying every actor on the pitch and tracking bounding boxes across frames. Trajectories feed into Pandas for aggregation and into Matplotlib for generating tactical maps: heatmaps, pass networks, and formation snapshots. The whole thing is served through a **Streamlit** interface that lets you explore team statistics and possession data without writing a single line of code.

![Footvision analysis dashboard](/projects/footvision-dashboard.png)

## Technical notes

Post-processing handles camera panning (homography-based pitch registration) and team assignment via jersey colour clustering. The modular pipeline design means each component — detection, tracking, visualisation — can be swapped or extended independently.
