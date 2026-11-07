# React Admin Panel

A responsive admin dashboard inspired by [TailAdmin](https://tailadmin.com/), built with React, TypeScript, and Tailwind CSS. The project is being developed step by step, focusing on reusable components, clean layout structure, and responsive design.

## Tech Stack

- **React** — UI development
- **TypeScript** — Type safety
- **Vite** — Development server and build tool
- **Tailwind CSS** — Utility-first styling
- **ESLint** — Code quality and linting
- **Prettier** — Code formatting

## Current Features

- [x] Vite + React + TypeScript project setup
- [x] ESLint configuration
- [x] Tailwind CSS setup
- [x] Prettier configuration
- [x] Basic application layout
- [x] Fixed, full-height sidebar
- [x] Reusable sidebar component
- [x] Reusable header component
- [x] Main content area
- [ ] Responsive mobile sidebar
- [ ] Mobile navigation drawer
- [ ] Sidebar navigation icons and active states
- [ ] Search bar and profile dropdown
- [ ] React Router integration
- [ ] Dashboard widgets and charts
- [ ] Dark mode

## Project Structure

```text
src/
├── components/
│   └── layout/
│       ├── Header.tsx
│       └── Sidebar.tsx
├── App.tsx
├── main.tsx
└── index.css

.prettierrc.json
eslint.config.js
package.json
tsconfig.json
tsconfig.app.json
tsconfig.node.json
vite.config.ts
```

## Layout Architecture

The application uses a reusable layout with three main areas:

```text
App
├── Sidebar
│   └── Fixed, full-height navigation
└── Content Wrapper
    ├── Header
    └── Main Content
```

### Sidebar

- Fixed to the left side of the viewport.
- Uses a width of `w-64` (16rem / 256px).
- Occupies the full viewport height using `h-screen`.
- Supports independent vertical scrolling using `overflow-y-auto`.

### Header

- Reusable `Header.tsx` component.
- Uses a height of `h-16` (4rem / 64px).
- Displays the dashboard title, notification button, and user profile placeholder.

### Main Content

- Occupies the remaining horizontal space.
- Uses `ml-64` on the content wrapper to account for the fixed sidebar.
- Uses Tailwind CSS spacing and typography utilities.

## Code Formatting

Prettier is configured through `.prettierrc.json`:

```json
{
  "semi": true,
  "singleQuote": false
}
```

This configuration enables semicolons and double quotes.

VS Code should have **Format on Save** enabled, with Prettier selected as the default formatter for TypeScript and TSX files.

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Run ESLint

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Development Roadmap

The project is being built incrementally to understand how a professional admin dashboard works.

1. Complete the project setup.
2. Build the base layout.
3. Develop the desktop sidebar and header.
4. Add responsive navigation for mobile devices.
5. Improve navigation with icons, dropdowns, and active states.
6. Add routing and reusable UI components.
7. Build dashboard cards, tables, charts, and forms.
8. Add dark mode and polish the overall UI.

## Project Status

**Current stage:** Base layout and reusable desktop components.

The project currently has a basic sidebar, header, and main content area. Mobile responsiveness and advanced dashboard features have not yet been implemented.

The goal is to build a maintainable, responsive admin dashboard inspired by TailAdmin while understanding each component and layout decision along the way.
