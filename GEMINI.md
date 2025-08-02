# Gemini Project Instructions

This document provides instructions for the Gemini AI assistant to effectively contribute to the `sandy-porto-1.0` project.

## Project Overview

`sandy-porto-1.0` is a Next.js application. It appears to be a portfolio website for "Sandy". The project uses TypeScript, Tailwind CSS, and GSAP for animations.

## Commands

When asked to perform tasks, use the following commands:

- **Run development server:** `bun run dev`
- **Build for production:** `bun run build`
- **Start production server:** `bun run start`
- **Lint files:** `bun run lint`

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** GSAP, Three.js

## Conventions

- **Formatting:** This project uses Prettier for code formatting. Before committing, run `npx prettier --write .` to format the code.
- **Components:** Create new components in the `components/` directory. If a component has multiple files, create a new directory for it (e.g., `components/MyComponent/MyComponent.tsx`).
- **Styling:** Use Tailwind CSS classes for styling. Avoid writing custom CSS in `.css` files if possible.
- **State Management:** For now, use React's built-in state management (useState, useReducer, useContext).
- **Commits:** Write clear and concise commit messages.
