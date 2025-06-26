# **Coding Standards**

\



## **Overview**

This document outlines the mandatory coding standards and conventions for the Creator's Deal Hub project. Adherence to these guidelines is crucial for maintaining code quality, consistency, readability, and team collaboration, especially given the involvement of both human and AI development agents. These standards apply to all code developed for both the frontend (Next.js, React, TypeScript, Tailwind CSS, Shadcn UI) and the backend (Payload CMS, TypeScript).


### **Change Log**

\


|            |         |                                                          |         |
| ---------- | ------- | -------------------------------------------------------- | ------- |
| Date       | Version | Description                                              | Author  |
| 2025-06-25 | 0.1     | Initial draft based on project tech stack                | Winston |
| 2025-06-26 | 0.2     | Updated to include guidelines for Shadcn UI integration. | Winston |


## **Core Standards**

\



### **Languages & Runtimes**

- **TypeScript**: 5.7.3

- **Node.js**: ^18.20.2 || >=20.9.0 (as per package.json engines)

- **React**: 19.1.0

- **Next.js**: 15.3.0


### **Style & Linting**

- **ESLint**: Enforced using eslint.config.mjs with eslint-config-next.

- **Prettier**: Used for code formatting to ensure consistent style across the codebase.

- **Tailwind CSS**: Utility-first approach for styling. Follow Tailwind's recommended practices for class application.

- **Shadcn UI**: Components are integrated directly into the codebase and styled using Tailwind CSS. Follow Shadcn's recommended cn utility for combining and conditionally applying Tailwind classes.

- **Automatic Formatting**: Developers must ensure prettier and eslint checks pass before committing code. Integration with IDE format-on-save is highly recommended.


### **Test Organization**

- Test files should ideally reside next to the component/module they test, or in a \_\_tests\_\_ or tests subdirectory within the module's folder.

- Follow the testing strategy defined in docs/architecture/testing-strategy.md (to be created).


## **Naming Conventions**

\



### **General Principles**

- Be descriptive and unambiguous.

- Use full words rather than abbreviations unless the abbreviation is widely understood within the domain (e.g., API).

- Consistency is paramount.


### **Specific Conventions**

\


|                                 |                        |                                                        |
| ------------------------------- | ---------------------- | ------------------------------------------------------ |
| Element                         | Convention             | Example                                                |
| **Variables**                   | camelCase              | const userName = 'John Doe';                           |
| **Functions**                   | camelCase              | function calculateTotalPrice() { ... }                 |
| **Components**                  | PascalCase             | UserProfileCard.tsx                                    |
| **Hooks**                       | use prefix + camelCase | useAuth.ts                                             |
| **TypeScript Types/Interfaces** | PascalCase             | interface UserProfile { ... }                          |
| **Files (Components)**          | PascalCase.tsx         | Button.tsx                                             |
| **Files (Hooks)**               | useHookName.ts         | useMediaQuery.ts                                       |
| **Files (Utilities)**           | camelCase.ts           | formatDate.ts                                          |
| **CSS Classes (if custom)**     | kebab-case             | mission-control-hud (already in styles.css for Header) |
| **Folders**                     | kebab-case             | src/app/(frontend)/components                          |


## **Critical Rules**

These rules are critical and must be strictly adhered to by all developers, including AI agents, to ensure project quality and maintainability.

- **"use client" directive**: Always place "use client"; at the very top of files for client-side components using interactive browser features. This includes components imported from Shadcn UI, as they are client-side interactive.

- **Absolute Imports**: Prefer absolute imports using @/ alias for src/ directory where configured (e.g., import { Button } from "@/components/ui/button";). Shadcn UI components, once added, will also follow this pattern.

- **No Direct DOM Manipulation**: Avoid direct DOM manipulation outside of React's lifecycle methods and refs where necessary.

- **Consistent Component Structure**: Follow established patterns for React components (e.g., using FC for function components, props destructuring). For Shadcn components, use them as provided and extend with className or cn utility for styling, avoiding direct modification of their core logic unless absolutely necessary.

- **Type Safety**: Always leverage TypeScript for strong typing. Avoid any unless absolutely necessary and justified. Ensure types are used for all props and state in custom components, and leverage types provided by Shadcn UI.

- **Accessibility**: Ensure all UI components and interactions adhere to accessibility best practices (e.g., proper ARIA attributes, keyboard navigation). Leverage Shadcn UI's inherent accessibility features (built on Radix UI) for all components obtained through it.

- **Performance Awareness**: Be mindful of performance implications, especially in React components (e.g., avoid unnecessary re-renders, optimize large lists). Pay particular attention to complex animations (Three.js, GSAP, Chart.js) and ensure they are optimized.

- **Error Handling**: Implement consistent error handling mechanisms across both frontend and backend.

- **Environment Variables**: Access environment variables securely and consistently via process.env (for Node.js/Next.js server-side) or process.env.NEXT\_PUBLIC\_ (for client-side) and ensure they are properly loaded and validated. Never hardcode sensitive information.

- **Cross-Cutting Concerns**: Handle cross-cutting concerns like logging, authentication, and error reporting through centralized services or utilities rather than scattering logic throughout components.


## **Language-Specific Guidelines**

\



### **TypeScript Specifics**

- **Strict Mode**: Adhere to TypeScript's strict mode settings (as configured in tsconfig.json).

- **Interface vs. Type**: Prefer interface for object types when defining public APIs, and type for aliases, unions, or complex types.

- **Function Overloads**: Use function overloads for functions that can accept different argument types or return different types.


## **Related Resources**

- [Technology Stack](https://www.google.com/search?q=./tech-stack.md)

- [Unified Project Structure](https://www.google.com/search?q=./unified-project-structure.md)

- [Testing Strategy](https://www.google.com/search?q=./testing-strategy.md)

- [UI/UX Specification](https://www.google.com/search?q=./ui-ux-spec.md)

- [UI Components](https://www.google.com/search?q=./components.md)
