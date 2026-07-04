<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-14833F?style=flat-square" alt="License: MIT"></a>
</p>

# MTDev Portfolio

Personal portfolio site showcasing my projects and skills as a software developer.

## Stack

- React 19, TypeScript, and Vite
- GSAP for scroll and interaction animations
- lucide-react for icons

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

## License

The source code in this repository is licensed under MIT. This does not extend to personal content, including my name, photo, resume, bio, and project media under `data/portfolioData.ts` and `public/assets/`, which are not licensed for reuse.
