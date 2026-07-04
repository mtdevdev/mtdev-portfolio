<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Three.js-r184-000000?style=flat-square&logo=three.js" alt="Three.js">
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-14833F?style=flat-square" alt="License: MIT"></a>
</p>

# MTDev Portfolio

Personal portfolio site for a Game Developer, built around C# and Unity projects, with React, Three.js, and GSAP for the presentation layer.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **@react-three/fiber** and **@react-three/drei** for the 3D scenes
- **GSAP** for scroll and interaction animations
- **@google/genai** for AI assisted content features

## Local development

```bash
npm install
npm run dev
```

## Content

All portfolio content (bio, stack, projects) lives in `data/portfolioData.ts` as a single typed object. To add or edit a project, update its entry there and drop matching cover image, screenshots, and preview video into `public/assets/projects/<project-id>/`.

## Building for production

```bash
npm run build
npm run preview
```
