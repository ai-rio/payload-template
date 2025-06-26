# Unified Project Structure

## Overview

# This document defines the standard project structure and organization for the Creator's Deal Hub. It outlines the directory layout, module separation, and naming conventions to ensure consistency, improve navigability for both human and AI development agents, and facilitate scalable fullstack development within a monorepo setup.

### Change Log

# | Date       | Version | Description                                       | Author  |
| ---------- | ------- | ------------------------------------------------- | ------- |
| 2025-06-25 | 0.1     | Initial draft based on provided project structure | Winston |

## Project Root Directory Structure

The project adheres to a monorepo structure, housing both the Next.js frontend and the Payload CMS backend, along with shared configurations and documentation.Plaintext    cdh/
    ├── Dockerfile                  # Docker configuration for environment setup
    ├── README.md                   # Main project README
    ├── bun.lock                    # Bun package manager lock file
    ├── components.json             # Configuration for shared UI components (potentially Shadcn/UI)
    ├── docker-compose.yml          # Docker Compose for local development environment
    ├── docs/                       # Project documentation
    │   ├── architecture/           # Architectural documentation
    │   │   ├── backend-architecture.md
    │   │   ├── coding-standards.md
    │   │   ├── components.md
    │   │   ├── core-workflows.md
    │   │   ├── database-schema.md
    │   │   ├── deployment-guide.md
    │   │   ├── error-handling-strategy.md
    │   │   ├── external-apis.md
    │   │   ├── frontend-architecture.md
    │   │   ├── fullstack-architecture.md
    │   │   ├── index.md
    │   │   ├── performance-guidelines.md
    │   │   ├── rest-api-spec.md
    │   │   ├── security-considerations.md
    │   │   ├── tech-stack.md
    │   │   ├── testing-strategy.md
    │   │   ├── troubleshooting-guide.md
    │   │   └── ui-ux-spec.md
    │   ├── html/                   # Original static HTML files for reference
    │   │   ├── 404_Signal_Lost.html
    │   │   ├── Terms_of_Service.html
    │   │   ├── The_living_data_contract.html
    │   │   ├── about.html
    │   │   ├── blog_post_template.html
    │   │   ├── carreers.html
    │   │   ├── contact.html
    │   │   ├── home.html
    │   │   └── pricing.html
    │   ├── prd/                    # Product Requirements Documents (sharded)
    │   │   └── prd.md
    │   ├── prompts/                # AI prompt templates
    │   │   └── creative_design.md
    │   └── stories/                # User stories (sharded)
    │       └── story1.1.md
    ├── eslint.config.mjs           # ESLint configuration
    ├── next-env.d.ts               # Next.js environment type definitions
    ├── next.config.mjs             # Next.js configuration
    ├── package.json                # Project package manifest
    ├── postcss.config.cjs          # PostCSS configuration (for Tailwind CSS)
    ├── src/                        # Application source code
    │   ├── app/                    # Next.js App Router structure
    │   │   ├── (frontend)/         # Route group for public-facing frontend
    │   │   │   ├── components/     # Reusable UI components specific to frontend application
    │   │   │   │   └── Header.tsx
    │   │   │   ├── layout.tsx      # Root layout for frontend pages
    │   │   │   ├── page.tsx        # Homepage (root) component
    │   │   │   └── styles.css      # Global CSS styles for frontend
    │   │   ├── (payload)/          # Route group for Payload CMS admin and API
    │   │   │   ├── admin/          # Payload admin panel routes
    │   │   │   │   ├── [[...segments]]/
    │   │   │   │   │   ├── not-found.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── importMap.js
    │   │   │   ├── api/            # Payload API routes
    │   │   │   │   ├── [...slug]/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── graphql/
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── graphql-playground/
    │   │   │   │       └── route.ts
    │   │   │   ├── custom.scss
    │   │   │   └── layout.tsx
    │   │   └── my-route/           # Example custom route
    │   │       └── route.ts
    │   ├── collections/            # Payload CMS collections (data models)
    │   │   ├── Media.ts
    │   │   └── Users.ts
    │   ├── components/             # Shared UI components (e.g., Shadcn/UI primitives)
    │   │   └── ui/
    │   │       ├── button.tsx
    │   │       └── card.tsx
    │   ├── lib/                    # Utility functions and libraries
    │   │   └── utils.ts
    │   ├── payload-types.ts        # Payload CMS generated TypeScript types
    │   └── payload.config.ts       # Payload CMS configuration
    ├── tailwind.config.js          # Tailwind CSS configuration
    └── tsconfig.json               # TypeScript configuration
====================================================================================================================================================================================================================================================================================================================================================================

## Key Directories and Their Purpose

# - `./`: The project root, containing global configurations, build scripts, and documentation.

- `./docs/`: Central repository for all project documentation, including architectural diagrams, PRDs, and user stories.

  - `./docs/architecture/`: Contains detailed architectural documentation.

  - `./docs/html/`: Stores the original static HTML files that are being converted.

  - `./docs/prd/`: Contains the Product Requirements Document.

  - `./docs/stories/`: Contains individual user stories.

- `./src/`: Contains all application source code.

  - `./src/app/`: Next.js App Router structure.

    - `./src/app/(frontend)/`: Houses the public-facing Next.js frontend application. This is where components and pages for the main website reside.

    - `./src/app/(payload)/`: Contains the Payload CMS admin panel and its API routes, logically separated from the frontend.

  - `./src/collections/`: Defines Payload CMS data collections (similar to database models).

  - `./src/components/`: Stores shared UI components that can be used across different parts of the application (e.g., generic UI primitives).

    - `./src/components/ui/`: Specifically for UI primitives (e.g., buttons, cards).

  - `./src/lib/`: Common utility functions.

- `./public/`: (Implicit in Next.js structure) For static assets (images, fonts, etc.).

## Component Organization

# - **Application-Specific Components**: Components used only within the frontend application (e.g., `Header.tsx` for the main site layout) are located under `src/app/(frontend)/components/`.

- **Shared UI Primitives**: Reusable, generic UI components (e.g., `button.tsx`, `card.tsx`) that can be shared across the entire project (frontend, admin panel) are placed under `src/components/ui/`.

## Naming Conventions

# - **Folders**: Generally `kebab-case`.

- **Files**: Follows `PascalCase` for React components and TypeScript types/interfaces, and `camelCase` for utility functions (as detailed in `docs/architecture/coding-standards.md`).

- **Next.js App Router**: Adheres to Next.js conventions for `app` directory, route groups `()`, and special files (`layout.tsx`, `page.tsx`, `route.ts`).

## Related Resources

# - [Coding Standards](https://www.google.com/search?q=./coding-standards.md)

- [Technology Stack](https://www.google.com/search?q=./tech-stack.md)

- [Fullstack Architecture](https://www.google.com/search?q=./fullstack-architecture.md) (to be created, will link to this structure)
