---
title: "Learn2Segment — Medical Imaging Framework"
date: "2025-09"
summary: "Meta-learning framework for few-shot medical image segmentation, enabling U-Net-based models to generalise to new organs or modalities from as few as one labelled example."
stack: ["Python", "PyTorch", "MONAI", "SimpleITK", "U-Net", "Meta-Learning", "MAML"]
links:
  github: "https://github.com/Ismailjm/learn2segment-nova"
cover: null
featured: true
---

Learn2Segment is the research framework developed during my final-year internship at **IRIT** (Institut de Recherche en Informatique de Toulouse). It addresses a fundamental bottleneck in medical AI: annotated medical images are expensive and scarce, yet standard deep learning demands thousands of labelled examples.

## The problem

Segmenting anatomical structures (organs, lesions, tumours) from MRI or CT scans requires pixel-level annotations made by radiologists — a slow, costly process. A model trained to segment the liver cannot trivially segment the spleen without starting over.

## The approach

Learn2Segment applies **meta-learning** (learning-to-learn) to segmentation. The framework trains across many segmentation tasks so that when it encounters a new organ with only a handful of labelled slices, it can adapt quickly. The backbone is a **U-Net** architecture, pre-trained in a meta-learning configuration using MAML-style inner/outer loop optimisation.

Medical image handling uses **MONAI** (Medical Open Network for AI) for data loading, augmentation pipelines, and evaluation metrics (Dice, HD95), and **SimpleITK** for volumetric preprocessing (resampling, normalisation, orientation).

## Context

This project directly informed my PhD research direction — the same challenge of data scarcity and domain-specific expertise applies to medieval Arabic manuscript recognition, just in a different modality.
