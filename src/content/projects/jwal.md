---
title: "JWAL — Morocco Tourism Chatbot"
date: "2024-06"
summary: "Intelligent travel planning chatbot for Morocco, combining RAG and fine-tuned LLMs to deliver personalised itinerary recommendations through a conversational interface."
stack: ["Python", "LangChain", "OpenAI", "Ollama", "Chainlit", "RAG"]
links:
  github: "https://github.com/Ismailjm/Jwal"
cover: "../../assets/projects/jwal-ui.png"
featured: true
---

JWAL is a conversational travel assistant built specifically for Morocco tourism. Ask it for a 5-day itinerary, local food recommendations, or transport options — it understands context, remembers the conversation, and responds naturally.

## How it works

The core is a **RAG pipeline** built with LangChain: a curated knowledge base of Moroccan travel information is chunked, embedded, and stored for retrieval. At query time the most relevant passages are injected into the prompt alongside the user's question, so the model grounds its answers in real, up-to-date content rather than hallucinating.

LLM inference runs through both **OpenAI** (cloud) and **Ollama** (local open-weights models), making the system usable with or without an API key. The conversational interface is built with **Chainlit**, which handles session state, streaming responses, and a clean chat UI out of the box.

## Why Morocco

Morocco sits at the intersection of Amazigh, Arab, African, and Mediterranean cultures — a genuinely complex travel destination that generic travel bots handle poorly. JWAL is trained on Morocco-specific data to give accurate, culturally-aware recommendations.
