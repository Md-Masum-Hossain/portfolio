# Portfolio

<p align="center">
	<a href="#portfolio">Overview</a> ·
	<a href="#features">Features</a> ·
	<a href="#tech-stack">Tech Stack</a> ·
	<a href="#getting-started">Getting Started</a> ·
	<a href="#project-structure">Project Structure</a>
</p>

<p align="center">
	<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 16" />
	<img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=000" alt="React 19" />
	<img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=fff" alt="Tailwind CSS 4" />
	<img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status Active" />
</p>

An animated personal portfolio built with Next.js to present projects, technical skills, experience, and contact details in a focused, professional layout. The goal is simple: make it easy for a visitor to understand who I am, what I build, and how to reach me.

## Overview

This site is organized like a modern developer portfolio rather than a generic landing page. The home experience combines a hero section, animated skill showcase, featured projects, an about section, and a contact call to action. The contact form submits to a serverless API route that sends mail through Resend.

## Features

- Clean one-page landing experience with animated sections and motion wrappers.
- Featured projects area with category filtering for frontend, backend, and full-stack work.
- Dedicated pages for about, projects, skills, and contact information.
- Contact form with API-backed email delivery using Resend.
- Social links and resume download access from the hero section.
- Content-driven project and skill data for easier maintenance.

## Tech Stack

<p>
	<a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
	<a href="https://react.dev/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" /></a>
	<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Tailwind_CSS-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS" /></a>
	<a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Framer_Motion-000000?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" /></a>
	<a href="https://resend.com/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Resend-111827?style=flat-square&logo=minutemailer&logoColor=white" alt="Resend" /></a>
</p>

## Features at a Glance

<details open>
<summary><strong>What the portfolio includes</strong></summary>

- A visually layered home page with a strong first impression.
- A skill carousel that highlights the technologies used most often.
- A projects section with reusable cards and category filters.
- A contact section that routes messages through the app instead of exposing email logic in the client.
- Reusable components and data files that keep content updates simple.

</details>

## Project Structure

- [src/app/page.js](src/app/page.js) composes the landing page sections.
- [src/app/layout.js](src/app/layout.js) defines the global shell, navigation, motion wrapper, and footer.
- [src/app/api/contact/route.js](src/app/api/contact/route.js) receives contact form submissions and sends email through Resend.
- [src/app/components/](src/app/components/) contains the reusable portfolio sections and shared UI pieces.
- [src/app/utility/projectsData.json](src/app/utility/projectsData.json) stores project content used by the projects page.
- [src/app/utility/skillsLogo.json](src/app/utility/skillsLogo.json) stores the skill icons shown in the skills section.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, yarn, or bun

### Installation

```bash
git clone https://github.com/Md-Masum-Hossain/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add:

```bash
RESEND_API_KEY=your_resend_api_key
```

The contact endpoint uses this key to send messages. Without it, form submissions will fail.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the development server with Turbopack.
- `npm run build` - create a production build.
- `npm run start` - run the production server.
- `npm run lint` - run ESLint.

## Notes

- The project uses custom motion wrappers and animated background elements, so the UI is intentionally modular.
- Project data lives outside the components, which keeps the showcase easy to update without editing layout code.
- The contact form posts to an internal API route, so no client-side mail service configuration is required beyond the Resend API key.
- Developer-focused implementation details live in [docs/DEVELOPER.md](docs/DEVELOPER.md).

## License

No license has been specified yet. Add one if you want to make reuse or contribution terms explicit.
