---
title: "Sign Language Interpreter"
date: "2024-12"
summary: "Real-time web application that translates hand gestures into text using Mediapipe skeleton tracking and a CNN classifier, built for the Youth For Challenge association."
stack: ["Python", "Flask", "Mediapipe", "OpenCV", "CNN"]
links:
  github: "https://github.com/Ismailjm/hand-sign-translator"
cover: "../../assets/projects/sign-language-ui.png"
featured: true
---

Built as a volunteer project for the **Youth For Challenge** association, this application makes communication more accessible for deaf and mute users by translating hand signs into text in real time.

## How it works

**Mediapipe Hands** extracts a 21-point skeleton from the webcam feed on every frame — wrist, finger joints, fingertips. These normalised landmarks (robust to hand size, skin tone, and lighting) feed into a CNN classifier trained on recorded gesture sequences. The prediction is streamed to a detection history panel alongside the live video.

The backend is a lightweight **Flask** server; the frontend renders the video feed and detection log in the browser with no additional dependencies.

## Scope

The current model covers common expressions and phrases: greetings, affirmations, negations, and basic social phrases. The architecture is designed for incremental expansion — adding new signs requires only recording new samples and retraining the classifier.
