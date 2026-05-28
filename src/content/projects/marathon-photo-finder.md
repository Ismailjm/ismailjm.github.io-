---
title: "Marathon Photo Finder"
date: "2024-03"
summary: "Machine learning system that helps runners find their race photos automatically using person re-identification and bib-number OCR."
stack: ["Python", "PyTorch", "CNNs", "OCR", "Flask", "OpenCV"]
links:
  github: "https://github.com/Ismailjm/marathon-photo-finder"
featured: true
---

Marathon Photo Finder solves a common frustration for runners: sifting through thousands of official race photos to find the handful where they appear.

## Motivation

Race photographers capture tens of thousands of images per event. Runners currently scroll through entire galleries sorted only by kilometre marker. This project makes the search instant.

## How it works

1. **Person detection** — A CNN-based architecture locates every runner in each photo.
2. **Bib OCR** — An optical character recognition system reads the race number from detected bounding boxes, providing a precise identifier for re-identification.
3. **Re-identification** — Given a runner's bib number (or a reference photo), the system returns all matching images from the event gallery.

## Key challenges

- Bib numbers are partially occluded, crumpled, or motion-blurred in race conditions.
- Varying lighting and crowd density require robust detection at different scales.
