# 🥭 JuliaOli pages: Software Engineering Portfolio
Personal website for a technical portfolio using Astro.js, Tailwind CSS, delivering static HTML with an fully automated infrastructure pipeline on Github Actions.

## 🎯 Project Purpose

* **Showcase Technical Depth:** Featuring a list of full-stack applications and tools.
* **Exhibit DevOps Proficiency:** Utilizing simple automated CI/CD pipelines for seamless deployment.
* **Demonstrate Performance:** Achieving good scores on Google Lighthouse.

## 🛠️ Tech Stack

* **Framework:** Astro.js (Static Site Generation - SSG)

* **Styling:** Tailwind CSS (Utility-first CSS)

* **Build Engine:** Vite (Native ESM)

* **CI/CD:** GitHub Actions

* **Hosting:** GitHub Pages

## 🚀 Project Structure

```text
├── .github/workflows/  # CI/CD Automation scripts
├── public/             # Static assets (fonts, icons, robots.txt)
├── src/
│   ├── components/     # Modular and reusable UI components
│   ├── layouts/        # Base HTML templates (Shells)
│   └── pages/          # File-based routing
├── astro.config.mjs    # Astro & Integrations configuration
└── tailwind.config.mjs # Design System customization
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## ⚙️ Getting Started
Follow these steps to set up your local development environment:

1. Prerequisites
Ensure you have Node.js (v18 or higher) installed on your machine.

2. Installation
Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/[your-username]/[your-repo].git

# Navigate to the project folder
cd [your-repo]

# Install dependencies
npm install
```

3. Development
To start the local server with Hot Module Replacement (HMR) powered by Vite:
```bash
npm run dev
```

## 🧞 Commands to run locally

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🔧 Required Configuration for GitHub Pages

For the automated deployment to work correctly, the following settings must be configured in `astro.config.mjs`. This ensures that asset paths (JS, CSS, Images) are resolved correctly under your repository subfolder.

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 1. Your production URL
  site: 'https://[your-username].github.io',
  
  // 2. Your repository name (MUST start with a forward slash)
  base: '/[your-repo-name]', 
  
  integrations: [tailwind()],
  output: 'static',
});
```

## 🚀 Deployment Process
### GitHub Actions Setup
The project uses a custom GitHub Action (located in .github/workflows/deploy.yml) to build and deployment is 100% automated.

1. Any `push` or `merge` to the `main` branch triggers the workflow.

2. The runner installs dependencies, validates the Vite build, and exports the static assets.

3. The site is automatically published to GitHub Pages.