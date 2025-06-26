# Frontend Architecture

## Overview

# This document outlines the frontend architecture for the Creator's Deal Hub, built with Next.js 15.3.0, React 19.1.0, and Tailwind CSS 4.1.10. It defines the structure, patterns, and guidelines for developing the user interface, emphasizing a mobile-first approach, modularity, and maintainability. The goal is to provide a clear blueprint for both human and AI development agents to build a high-performance, scalable, and visually consistent user experience.

### Change Log

# | Date       | Version | Description                                                          | Author  |
| ---------- | ------- | -------------------------------------------------------------------- | ------- |
| 2025-06-25 | 0.1     | Initial draft based on project tech stack and mobile-first principle | Winston |

## Template and Framework Selection

# The project is based on a **Next.js** framework, leveraging its App Router structure. This provides capabilities for Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes, optimizing performance and SEO. No additional frontend-specific starter template was explicitly used beyond the core Next.js setup, indicating a build from a foundational level using Next.js best practices.

## Frontend Tech Stack

# This section summarizes the key frontend technologies aligned with the main `Technology Stack` document.

### Technology Stack Table

# | Category              | Technology                            | Version | Purpose                              | Rationale                                                                                                                    |
| --------------------- | ------------------------------------- | ------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Framework**         | Next.js                               | 15.3.0  | React framework with SSR/SSG         | Chosen for performance, SEO benefits, and Vercel integration, aligning with the goal of a dynamic, component-based homepage. |
| **UI Library**        | React                                 | 19.1.0  | Base UI library                      | Provides a declarative way to build user interfaces.                                                                         |
| **State Management**  | React hooks (`useState`, `useEffect`) | N/A     | Local component state management     | Lightweight and built-in for managing component-specific UI states.                                                          |
| **Routing**           | Next.js App Router                    | 15.3.0  | Client-side and server-side routing  | Provides a flexible and powerful routing system integrated with data fetching.                                               |
| **Build Tool**        | Next.js Build System                  | 15.3.0  | Compiling and optimizing application | Integrated with Next.js for efficient build processes.                                                                       |
| **Styling**           | Tailwind CSS                          | 4.1.10  | Utility-first CSS framework          | For rapid and consistent styling across the application, enabling mobile-first development.                                  |
| **Testing**           | N/A                                   | N/A     | Not explicitly defined yet.          | Will be determined based on specific testing requirements.                                                                   |
| **Component Library** | Custom + Shared UI primitives         | N/A     | Reusable UI elements                 | Combines project-specific components with generic UI building blocks.                                                        |
| **Form Handling**     | Native HTML Forms + React state       | N/A     | Basic form management                | For handling user input with direct React state.                                                                             |
| **Animation**         | GSAP                                  | 3.13.0  | Advanced animation capabilities      | For smooth and complex animations, enhancing user experience.                                                                |
| **3D Graphics**       | Three.js                              | 0.177.0 | Interactive 3D animations            | Used for visually engaging experiences like the starfield background.                                                        |

## Project Structure

The frontend application resides primarily within the `src/app/(frontend)/` route group, logically separating it from the Payload CMS admin and API.Plaintext    src/
    ├── app/
    │   ├── (frontend)/                   # Public-facing frontend application
    │   │   ├── components/               # Reusable UI components for the frontend application
    │   │   │   └── Header.tsx            # Example: Main navigation header
    │   │   ├── layout.tsx                # Root layout for all frontend pages
    │   │   ├── page.tsx                  # Homepage component (root path '/')
    │   │   └── styles.css                # Global CSS styles for the frontend (including Tailwind directives)
    │   ├── (payload)/                    # Payload CMS admin and API routes (backend concerns)
    │   └── my-route/                     # Example custom Next.js route
    ├── components/                       # Shared UI components (generic primitives, e.g., Shadcn/UI style)
    │   └── ui/                           # Primitive UI components (e.g., button, card)
    │       ├── button.tsx
    │       └── card.tsx
    ├── lib/                              # Utility functions and libraries
    │   └── utils.ts
    └── payload-types.ts                  # Payload CMS generated TypeScript types (shared)
=================================================================================================================================================================================================================================================================================================================================================================================================

## Component Standards

### Component Template

Functional components using TypeScript are preferred. All client-side interactive components must include the `"use client";` directive at the top of the file.TypeScript    // Example: src/app/(frontend)/components/MyComponent.tsx
    "use client"; // If interactive and uses browser APIs

    import React from 'react';

    interface MyComponentProps {
      // Define props here
      title: string;
      count?: number;
    }

    const MyComponent: React.FC<MyComponentProps> = ({ title, count = 0 }) => {
      // Component logic here
      return (
        <div className="p-4 bg-gray-800 text-white rounded-lg">
          <h2 className="text-xl font-bold">{title}</h2>
          {count > 0 && <p>Count: {count}</p>}
          {/* ... other JSX */}
        </div>
      );
    };

    export default MyComponent;
=====================================================================================================================================================================================================================================================================================================================================

### Naming Conventions

# - **Components**: `PascalCase` (e.g., `Header.tsx`, `HeroSection.tsx`).

- **Hooks**: `use` prefix + `camelCase` (e.g., `useAuth.ts`).

- **Files**: Component file names match the component name (e.g., `Button.tsx` for `Button` component).

- **Folders**: `kebab-case` (e.g., `src/app/(frontend)/components`).

## State Management

# For local component state, React Hooks (`useState`, `useEffect`) are used. For global or shared state across the application that might grow in complexity beyond simple prop drilling, a more robust solution like React Context API or a dedicated state management library (e.g., Zustand, Jotai, Redux Toolkit) would be evaluated in the future.

### Store Structure (Conceptual for future expansion)

# If a global store is introduced, it would typically reside in `src/app/(frontend)/store/` or `src/store/` (for shared state).

### State Management Patterns

# - **Local State**: `useState` for simple UI state, `useReducer` for more complex state logic within a single component or small component tree.

- **Side Effects**: `useEffect` for data fetching, subscriptions, or manual DOM manipulations.

- **Context API**: For sharing state implicitly between components without prop-drilling, suitable for themes, authentication status, or user preferences.

## API Integration

# The frontend interacts with the Payload CMS backend via its REST API.

### Service Template

A service layer will encapsulate API calls, ensuring consistency and reusability. Example for a `UserService`:TypeScript    // Example: src/app/(frontend)/services/userService.ts
    import { User } from '@/payload-types'; // Assuming types are generated and importable

    const BASE_URL = '/api'; // Relative path to Next.js API routes / Payload API

    export const userService = {
      async getMe(): Promise<User | null> {
        const res = await fetch(`${BASE_URL}/users/me`);
        if (!res.ok) {
          // Handle error, e.g., throw new Error('Failed to fetch user');
          return null;
        }
        const data = await res.json();
        return data.user;
      },

      async login(credentials: { email: string; password: string }): Promise<{ user: User; token: string }> {
        const res = await fetch(`${BASE_URL}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.errors?.[0]?.message || 'Login failed');
        }
        return res.json();
      },
      // ... other user-related API calls
    };
============================================================================================================================================================================================================================================================================================================

### API Client Configuration

# Native `fetch` API is used for making HTTP requests. For authentication, JWT tokens obtained from the `/api/users/login` endpoint will be stored (e.g., in `localStorage` or `httpOnly` cookies) and sent with subsequent requests via `Authorization: Bearer <token>` headers.

## Routing

# Next.js App Router handles all routing. Routes are defined by folder structure within the `src/app/` directory.

### Route Configuration

# - **Public Routes**: Pages within `(frontend)` group (e.g., `page.tsx` for `/`, `contact/page.tsx` for `/contact`).

- **Protected Routes**: Will require middleware or server-side checks in `layout.tsx` or `page.tsx` to redirect unauthenticated users.

- **Dynamic Routes**: Handled using square brackets `[]` (e.g., `blog/[slug]/page.tsx`).

### Example Route Structure:

Plaintext    src/app/
    ├── (frontend)/
    │   ├── layout.tsx         # Shared layout for all public pages
    │   ├── page.tsx           # Homepage (/)
    │   ├── about/
    │   │   └── page.tsx       # About Us page (/about)
    │   ├── contact/
    │   │   └── page.tsx       # Contact page (/contact)
    │   ├── pricing/
    │   │   └── page.tsx       # Pricing page (/pricing)
    │   ├── careers/
    │   │   └── page.tsx       # Careers page (/careers)
    │   ├── 404_Signal_Lost/
    │   │   └── page.tsx       # Custom 404 page (/404_Signal_Lost) - typically handled by Next.js's native not-found.tsx
    │   ├── login/
    │   │   └── page.tsx       # Login page (/login) - currently a modal trigger in home.html, needs conversion
    │   └── blog/
    │       ├── page.tsx       # Blog listing page (/blog)
    │       └── [slug]/
    │           └── page.tsx   # Individual blog post (/blog/my-first-post)
    └── (payload)/             # Payload CMS admin & API routes (separate concern)
========================================================================================================================================================================================================================================================================================================================================================================================

## Styling Guidelines

# Tailwind CSS is the chosen utility-first CSS framework. Global styles are in `src/app/(frontend)/styles.css`.

### Styling Approach

# - **Utility-First**: Apply Tailwind utility classes directly in JSX for rapid styling.

- **Component Encapsulation**: For complex or reusable styles, prefer `@apply` directives within CSS files (e.g., `src/app/(frontend)/styles.css` for global styles, or potentially a dedicated CSS module per component if needed for very specific component styles).

- **Responsive Design**: Mobile-first approach using Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`). Design for mobile screens first, then progressively add styles for larger breakpoints.

### Global Theme Variables

# Tailwind CSS's configuration (`tailwind.config.js`) defines the design system, including colors, typography, spacing, and breakpoints. Custom CSS variables (CSS Custom Properties) in `src/app/(frontend)/styles.css` can be used for more dynamic theming if necessary.

## Testing Requirements

# Frontend testing will adhere to the general `Testing Strategy` outlined in `docs/architecture/testing-strategy.md`.

### Component Test Template (Conceptual)

Using Jest and React Testing Library:TypeScript    // Example: src/app/(frontend)/components/Button.test.tsx
    import { render, screen } from '@testing-library/react';
    import Button from './Button'; // Assuming Button component

    describe('Button', () => {
      it('renders correctly with text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
      });

      it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Test</Button>);
        screen.getByText('Test').click();
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
=============================================================================================================================================================================================================================================================================================================

### Testing Best Practices

# - **Unit Tests**: For individual React components and utility functions, ensuring their isolated functionality.

- **Integration Tests**: For interactions between components or components and mocked API services.

- **E2E Tests**: For critical user flows across the entire application using Playwright.

- **Visual Regression Testing**: (Future consideration) To catch unintended UI changes.

## Environment Configuration

# Frontend environment variables (e.g., API URLs, feature flags) are managed via Next.js's built-in environment variable support.* `NEXT_PUBLIC_VAR_NAME`: Accessible on both client and server side.

* `VAR_NAME`: Accessible only on the server side.

## Frontend Developer Standards

# Adherence to `Coding Standards` is paramount.

### Critical Coding Rules

# - **Mobile-First Design**: Always consider the smallest screen size first when applying Tailwind classes and structuring components.

- **Avoid Inline Styles**: Prefer Tailwind classes or CSS Modules over inline styles for better maintainability and performance.

- **Semantic HTML**: Use appropriate HTML5 semantic elements for better accessibility and SEO.

- **Accessibility First**: Ensure all interactive elements have proper `aria` attributes, keyboard focus management, and sufficient color contrast.

- **Performance Optimization**: Implement image optimization (Next.js Image component), code splitting, and lazy loading for large components/pages.

### Quick Reference

# - **Start Dev Server**: `bun run dev`

- **Build Project**: `bun run build`

- **Run Tests**: `bun test` (assuming Jest/React Testing Library setup)

- **Common Imports**:

  - `import React from 'react';`

  - `import { useState, useEffect } from 'react';`

  - `import { cn } from '@/lib/utils';` (for Tailwind class merging)

- **File Naming**: `PascalCase.tsx` for components, `useCamelCase.ts` for hooks.

## Related Resources

# - [Technology Stack](https://www.google.com/search?q=./tech-stack.md)

- [Unified Project Structure](https://www.google.com/search?q=./unified-project-structure.md)

- [Coding Standards](https://www.google.com/search?q=./coding-standards.md)

- [Testing Strategy](https://www.google.com/search?q=./testing-strategy.md)

- [UI/UX Specification](https://www.google.com/search?q=./ui-ux-spec.md) (to be created)

- [UI Components](https://www.google.com/search?q=./components.md) (to be created)

- [Core Workflows](https://www.google.com/search?q=./core-workflows.md) (to be created)
