# MTDev Portfolio

Personal portfolio website designed for a Gameplay Programmer, built with React, TypeScript, and Tailwind CSS.

## Tech Stack

*   **Core:** React 19, TypeScript
*   **Styling:** Tailwind CSS (via CDN/Config)
*   **Icons:** Lucide React
*   **Font:** Montserrat (Google Fonts)

## Features

*   **Visual Design:** Custom grain overlay, dark mode aesthetic, and parallax background effects.
*   **Project Showcase:** Interactive grid displaying game projects.
*   **Project Modals:** Detailed views for projects including:
    *   Image galleries
    *   Tech stack highlights
    *   Code snippets (Code Spotlight)
    *   Play/Repository links
*   **Scroll Animations:** Elements reveal on scroll using Intersection Observer.
*   **Responsive:** Fully adaptive layout for mobile and desktop.

## Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Content Management

*   **Data:** All portfolio content (bio, projects, skills) is managed in `constants.ts`.
*   **Assets:** Images and PDFs should be placed in the `public/assets` folder.
