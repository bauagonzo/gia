---
applyTo: '**'
---


# 🎯 Overall Goal
Build a responsive web application that allows users to practice all five GIA test types:
- Reasoning
- Perceptual Speed
- Number Speed & Accuracy
- Word Meaning
- Spatial Visualisation
The website must replicate the logic, timing, and interaction style of the real GIA test, but without copying copyrighted content.
All questions must be algorithmically generated.


# 🏗️ Technical Requirements
## Architecture
- Frontend: Svelte for the SPA & Flowbite for CSS framework
- Backend:  No backend, everything is client side (question generation & results calculation)
- Database: No need we are not storing results
- Hosting: local deployment as docker container

## General UI Requirements
- Clean, minimal interface
- Large buttons for answer choices
- Keyboard-free interaction (mouse/touch only)
- Timer visible but unobtrusive
- Automatic progression to next question after answering
- i18n support for English, French and later Spanish

# 🧩 Detailed Logic for Each Test
## Task 1 — Reasoning

Goal: Compare two people based on a statement.

Question Generation Rules
- Randomly generate:
- Two names
- One adjective pair (e.g., heavier/lighter, stronger/weaker, brighter/duller)
- A statement structure:
- “X is [comparative] than Y”
- “X is not as [adjective] as Y”
- Generate a question:
- “Who is [opposite adjective]?”
- Two answer buttons: X and Y
Correct Answer Logic
- Parse the statement
- Determine relationship direction
- Map to the question’s requested comparison

## Task 2 — Perceptual Speed

Goal: Count how many letter pairs match (case-insensitive).

Question Generation Rules
- Generate 4 pairs of letters
- Each pair is:
- Same letter (random case) OR
- Different letters
- Display 5 answer options: 0–4
Correct Answer Logic
- Count pairs where letter1.toLowerCase() === letter2.toLowerCase

## Task 3 — Number Speed & Accuracy
Goal: Identify whether the highest or lowest number is furthest from the remaining number.

Question Generation Rules
- Generate 3 integers between 1 and 99
- Ensure they are not all equal
- Display them vertically
Correct Answer Logic
- Identify highest and lowest
- Compute distances from the middle number
- Return the number with the larger distance

## Task 4 — Word Meaning
Goal: Identify the odd word out.

Question Generation Rules
- Maintain a dictionary of semantic groups (e.g., synonyms, opposites, categories)
- For each question:
- Pick a group of 2 related words
- Add 1 unrelated word
- Shuffle the three words
Correct Answer Logic
- The word not belonging to the semantic group

## Task 5 — Spatial Visualisation

Goal: Count how many symbol pairs match after rotation (not mirrored).

Question Generation Rules
- Start with a set of base symbols (R & F)
- For each pair:
  - Either rotate the symbol (valid match)
  - Or mirror + rotate (invalid match)
  - Generate 2 pairs per question
- Provide answer options: 0–1-2
Correct Answer Logic
- For each pair:
- If bottom symbol is a rotated version of the top → match
- If mirrored → not a match

# ⏱️ Timing System

Each test has:
- Main test:
  - Reasoning: 5 minutes
  - Perceptual Speed: 2 minutes
  - Number Speed: 2 minutes
  - Word Meaning: 4 minutes
  - Spatial Visualisation: 4 minutes
Timer must:
- Start automatically
- Stop automatically
- Lock input when time expires


# 📊 Results Page
After each test:
- Show number of correct answers
- Show total questions attempted
- Show accuracy %
- Show speed (questions/minute)
- Option to retry or return to menu
