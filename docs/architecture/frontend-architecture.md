# **Frontend Architecture**

\



## **Overview**

This document outlines the frontend architecture for the Creator's Deal Hub, built with Next.js 15.3.0, React 19.1.0, Tailwind CSS 4.1.10, and now integrating Shadcn UI. It defines the structure, patterns, and guidelines for developing the user interface, emphasizing a mobile-first approach, modularity, and maintainability. The adoption of Shadcn UI aims to accelerate UI development, enhance consistency, and leverage a well-maintained, accessible component library.


### **Change Log**

\


|            |         |                                                                                    |         |
| ---------- | ------- | ---------------------------------------------------------------------------------- | ------- |
| Date       | Version | Description                                                                        | Author  |
| 2025-06-25 | 0.1     | Initial draft based on project tech stack and mobile-first principle               | Winston |
| 2025-06-26 | 0.2     | Updated to reflect the adoption and integration strategy for Shadcn UI components. | Winston |


## **Template and Framework Selection**

The project is based on a **Next.js** framework, leveraging its App Router structure. This provides capabilities for Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes, optimizing performance and SEO. The UI development will now heavily leverage **Shadcn UI** components as a foundational layer for many common UI elements, styled with Tailwind CSS.


## **Frontend Tech Stack**

This section summarizes the key frontend technologies, updated to reflect Shadcn UI.


### **Technology Stack Table**

\


|                      |                                                    |                              |                                       |                                                                                                                                                            |
| -------------------- | -------------------------------------------------- | ---------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category             | Technology                                         | Version                      | Purpose                               | Rationale                                                                                                                                                  |
| **Framework**        | Next.js                                            | 15.3.0                       | React framework with SSR/SSG          | Chosen for performance, SEO benefits, and Vercel integration, aligning with the goal of a dynamic, component-based homepage.                               |
| **UI Library**       | React                                              | 19.1.0                       | Base UI library                       | Provides a declarative way to build user interfaces.                                                                                                       |
| **Component System** | Shadcn UI                                          | (Latest Stable)              | Pre-built, customizable UI components | Accelerates UI development, provides accessible and responsive components, and integrates seamlessly with Tailwind CSS.                                    |
| **State Management** | React hooks (useState, useEffect)                  | N/A                          | Local component state management      | Lightweight and built-in for managing component-specific UI states. Future consideration for global state solutions.                                       |
| **Routing**          | Next.js App Router                                 | 15.3.0                       | Client-side and server-side routing   | Provides a flexible and powerful routing system integrated with data fetching.                                                                             |
| **Build Tool**       | Next.js Build System                               | 15.3.0                       | Compiling and optimizing application  | Integrated with Next.js for efficient build processes.                                                                                                     |
| **Styling**          | Tailwind CSS                                       | 4.1.10                       | Utility-first CSS framework           | For rapid and consistent styling across the application, enabling mobile-first development. Used for both custom styles and customizing Shadcn components. |
| **Testing**          | Jest, React Testing Library, Playwright            | N/A                          | Unit, Integration, E2E testing        | Adheres to docs/architecture/testing-strategy.md.                                                                                                          |
| **Form Handling**    | Native HTML Forms + React state (+ Shadcn UI Form) | N/A                          | Basic form management                 | For handling user input. Shadcn's Form component will be preferred for complex forms.                                                                      |
| **Animation**        | GSAP                                               | 3.13.0                       | Advanced animation capabilities       | For smooth and complex animations, enhancing user experience.                                                                                              |
| **3D Graphics**      | Three.js                                           | 0.177.0                      | Interactive 3D animations             | Used for visually engaging experiences like the starfield background.                                                                                      |
| **Charting Library** | Chart.js                                           | (inferred from landing.html) | For rendering interactive charts.     | Used for displaying data visualizations on the landing page.                                                                                               |


## **Project Structure**

The frontend application resides primarily within the src/app/(frontend)/ route group, logically separating it from the Payload CMS admin and API. Shadcn UI components are specifically housed under src/components/ui/.

Plaintext

\


src/\
├── app/\
│   ├── (frontend)/                   # Public-facing frontend application pages and application-specific components\
│   │   ├── components/               # Reusable UI components specific to the frontend application (e.g., Header, HeroSection)\
│   │   │   └── Header.tsx\
│   │   ├── layout.tsx                # Root layout for all frontend pages\
│   │   ├── page.tsx                  # Homepage (root) component\
│   │   └── styles.css                # Global CSS styles for the frontend (including Tailwind directives)\
│   ├── (payload)/                    # Payload CMS admin and API routes (backend concerns)\
│   └── my-route/                     # Example custom Next.js route\
├── collections/                      # Payload CMS collections (data models)\
├── components/                       # Shared UI components (generic primitives, e.g., Shadcn/UI)\
│   └── ui/                           # Shadcn UI components (copied into project for customization)\
│       ├── button.tsx                # Example: Shadcn Button component\
│       └── card.tsx                  # Example: Shadcn Card component\
│       └── dialog.tsx                # Example: Shadcn Dialog component\
│       └── input.tsx                 # Example: Shadcn Input component\
│       └── # ... and other Shadcn components\
├── lib/                              # Utility functions and libraries (e.g., cn utility)\
│   └── utils.ts\
└── payload-types.ts                  # Payload CMS generated TypeScript types (shared)


## **Component Standards**

\



### **Component Template**

Functional components using TypeScript are preferred. All client-side interactive components (including those wrapping Shadcn UI) must include the "use client"; directive at the top of the file.

TypeScript

\


// Example: src/app/(frontend)/components/MyCustomComponent.tsx\
"use client"; // If interactive and uses browser APIs\
\
import React from 'react';\
import { Button } from "@/components/ui/button"; // Example of importing a Shadcn UI component\
import { cn } from "@/lib/utils"; // Utility for merging Tailwind classes\
\
interface MyCustomComponentProps {\
  // Define props here\
  title: string;\
  isEnabled?: boolean;\
}\
\
const MyCustomComponent: React.FC\<MyCustomComponentProps> = ({ title, isEnabled = true }) => {\
  return (\
    \<div className={cn("p-4 rounded-lg", isEnabled ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-400")}>\
      \<h2 className="text-xl font-bold">{title}\</h2>\
      \<Button disabled={!isEnabled} className="mt-2">\
        Perform Action\
      \</Button>\
      {/\* ... other JSX \*/}\
    \</div>\
  );\
};\
\
export default MyCustomComponent;


### **Shadcn UI Component Integration Strategy**

- **Local Copy**: Shadcn UI components are "installed" by copying their source code directly into src/components/ui/. This allows full control over styling and functionality without being locked into a node\_modules dependency.

- **Styling**: Customization primarily occurs via Tailwind CSS utility classes passed through the className prop. The cn utility from lib/utils.ts (often included by Shadcn init) is crucial for merging default and custom class names efficiently.

- **Theming**: Shadcn components' base styles are controlled by CSS variables, which can be overridden in src/app/(frontend)/styles.css (or globals.css if present) to align with the project's specific color palette and theme.

- **Composition**: Complex UI elements from the original HTML will be built by composing multiple Shadcn UI primitives (e.g., a "Card with Form" might combine Shadcn Card, Input, Label, and Button components).


### **Naming Conventions**

- **Components**: PascalCase (e.g., Header.tsx, HeroSection.tsx). Shadcn components copied to src/components/ui/ will retain their original PascalCase naming (e.g., Button.tsx).

- **Hooks**: use prefix + camelCase (e.g., useAuth.ts).

- **Files**: Component file names match the component name (e.g., Button.tsx for Button component).

- **Folders**: kebab-case (e.g., src/app/(frontend)/components).


## **State Management**

For local component state, React Hooks (useState, useEffect) are used. Shadcn UI components handle their internal state where applicable (e.g., Dialog open/closed state). For global or shared state across the application, React Context API or a dedicated state management library (e.g., Zustand, Jotai, Redux Toolkit) would be evaluated in the future if complexity necessitates.


### **API Integration**

The frontend interacts with the Payload CMS backend via its REST API.


### **Service Template**

A service layer will encapsulate API calls, ensuring consistency and reusability. Example for a UserService:

TypeScript

\


// Example: src/app/(frontend)/services/userService.ts\
import { User } from '@/payload-types'; // Assuming types are generated and importable\
\
const BASE\_URL = '/api'; // Relative path to Next.js API routes / Payload API\
\
export const userService = {\
  async getMe(): Promise\<User | null> {\
    const res = await fetch(\`${BASE\_URL}/users/me\`);\
    if (!res.ok) {\
      // Handle error, e.g., throw new Error('Failed to fetch user');\
      return null;\
    }\
    const data = await res.json();\
    return data.user;\
  },\
\
  async login(credentials: { email: string; password: string }): Promise<{ user: User; token: string }> {\
    const res = await fetch(\`${BASE\_URL}/users/login\`, {\
      method: 'POST',\
      headers: {\
        'Content-Type': 'application/json',\
      },\
      body: JSON.stringify(credentials),\
    });\
    if (!res.ok) {\
      const errorData = await res.json();\
      throw new Error(errorData.errors?.\[0]?.message || 'Login failed');\
    }\
    return res.json();\
  },\
  // ... other user-related API calls\
};


### **API Client Configuration**

Native fetch API is used for making HTTP requests. For authentication, JWT tokens obtained from the /api/users/login endpoint will be stored (e.g., in localStorage or httpOnly cookies) and sent with subsequent requests via Authorization: Bearer \<token> headers.


## **Routing**

Next.js App Router handles all routing. Routes are defined by folder structure within the src/app/ directory.


### **Route Configuration**

- **Public Routes**: Pages within (frontend) group (e.g., page.tsx for /, contact/page.tsx for /contact).

- **Protected Routes**: Will require middleware or server-side checks in layout.tsx or page.tsx to redirect unauthenticated users.

- **Dynamic Routes**: Handled using square brackets \[] (e.g., blog/\[slug]/page.tsx).


### **Example Route Structure:**

\


Plaintext

\


src/app/\
├── (frontend)/\
│   ├── layout.tsx         # Shared layout for all public pages\
│   ├── page.tsx           # Homepage (/)\
│   ├── about/\
│   │   └── page.tsx       # About Us page (/about)\
│   ├── contact/\
│   │   └── page.tsx       # Contact page (/contact)\
│   ├── pricing/\
│   │   └── page.tsx       # Pricing page (/pricing)\
│   ├── careers/\
│   │   └── page.tsx       # Careers page (/careers)\
│   ├── 404\_Signal\_Lost/\
│   │   └── page.tsx       # Custom 404 page (/404\_Signal\_Lost) - typically handled by Next.js's native not-found.tsx\
│   ├── login/\
│   │   └── page.tsx       # Login page (/login) - currently a modal trigger in home.html, needs conversion\
│   ├── landing/           # New: Landing page route\
│   │   └── page.tsx       # Landing page component (/landing)\
│   └── blog/\
│       ├── page.tsx       # Blog listing page (/blog)\
│       └── \[slug]/\
│           └── page.tsx   # Individual blog post (/blog/my-first-post)\
└── (payload)/             # Payload CMS admin & API routes (separate concern)


## **Styling Guidelines**

Tailwind CSS is the chosen utility-first CSS framework. Global styles are in src/app/(frontend)/styles.css. Shadcn UI components are designed to integrate seamlessly with Tailwind.


### **Styling Approach**

- **Utility-First**: Apply Tailwind utility classes directly in JSX for rapid styling.

- **Component Encapsulation**: For complex or reusable styles, prefer @apply directives within CSS files (e.g., src/app/(frontend)/styles.css for global styles, or potentially a dedicated CSS module per component if needed for very specific component styles).

- **Shadcn Styling**: Shadcn components are pre-styled with Tailwind. Further customization is done by passing Tailwind classes via the className prop, leveraging the cn utility for merging. The project's root CSS (src/app/(frontend)/styles.css) will contain global Tailwind directives and any CSS variables for Shadcn theming.

- **Responsive Design**: Mobile-first approach using Tailwind's responsive prefixes (e.g., sm:, md:, lg:). Shadcn components are also built with responsiveness in mind.


### **Global Theme Variables**

Tailwind CSS's configuration (tailwind.config.js) defines the design system, including colors, typography, spacing, and breakpoints. Custom CSS variables (CSS Custom Properties) in src/app/(frontend)/styles.css will be used for Shadcn UI theming to align with our brand colors.


## **Testing Requirements**

Frontend testing will adhere to the general Testing Strategy outlined in docs/architecture/testing-strategy.md. This includes testing custom components and ensuring proper functionality and styling of Shadcn UI components after customization.


### **Component Test Template (Conceptual)**

Using Jest and React Testing Library:

TypeScript

\


// Example: src/app/(frontend)/components/Button.test.tsx\
import { render, screen } from '@testing-library/react';\
import { Button } from '@/components/ui/button'; // Assuming Button component is Shadcn UI\
\
describe('Button', () => {\
  it('renders correctly with text', () => {\
    render(\<Button>Click Me\</Button>);\
    expect(screen.getByText('Click Me')).toBeInTheDocument();\
  });\
\
  it('calls onClick when clicked', () => {\
    const handleClick = jest.fn();\
    render(\<Button onClick={handleClick}>Test\</Button>);\
    screen.getByText('Test').click();\
    expect(handleClick).toHaveBeenCalledTimes(1);\
  });\
});


### **Testing Best Practices**

- **Unit Tests**: For individual React components (both custom and Shadcn wrappers), ensuring their isolated functionality.

- **Integration Tests**: For interactions between components (custom and Shadcn), and components interacting with mocked API services.

- **E2E Tests**: For critical user flows across the entire application using Playwright.

- **Visual Regression Testing**: (Future consideration) To catch unintended UI changes introduced by custom styles or Shadcn customizations.


## **Environment Configuration**

Frontend environment variables (e.g., API URLs, feature flags) are managed via Next.js's built-in environment variable support.

- NEXT\_PUBLIC\_VAR\_NAME: Accessible on both client and server side.

- VAR\_NAME: Accessible only on the server side.


## **Frontend Developer Standards**

Adherence to Coding Standards is paramount.


### **Critical Coding Rules**

- **Mobile-First Design**: Always consider the smallest screen size first when applying Tailwind classes and structuring components.

- **Leverage Shadcn UI**: Prefer Shadcn UI components for common UI patterns (buttons, inputs, dialogs, etc.) over building custom equivalents from scratch, unless the design is highly unique.

- **Customize via Tailwind**: Apply customizations to Shadcn components primarily through Tailwind classes using the cn utility. Avoid modifying Shadcn component source files directly unless absolutely necessary and documented.

- **Avoid Inline Styles**: Prefer Tailwind classes or CSS Modules over inline styles for better maintainability and performance.

- **Semantic HTML**: Use appropriate HTML5 semantic elements for better accessibility and SEO. Shadcn components often provide semantic HTML by default.

- **Accessibility First**: Ensure all interactive elements have proper aria attributes, keyboard focus management, and sufficient color contrast. Leverage Shadcn's built-in accessibility.

- **Performance Optimization**: Implement image optimization (Next.js Image component), code splitting, and lazy loading for large components/pages. Optimize Three.js, GSAP, and Chart.js animations.

- **Error Handling**: Implement consistent frontend error handling for API responses.

- **Environment Variables**: Access environment variables securely.


### **Quick Reference**

- **Start Dev Server**: bun run dev

- **Build Project**: bun run build

- **Run Tests**: bun test (assuming Jest/React Testing Library setup)

- **Add Shadcn Component**: npx shadcn-ui\@latest add \<component-name>

- **Common Imports**:

* import React from 'react';

* import { useState, useEffect } from 'react';

* import { cn } from '@/lib/utils'; (for Tailwind class merging)

* import { Button } from '@/components/ui/button'; (for Shadcn components)

- **File Naming**: PascalCase.tsx for components, useCamelCase.ts for hooks.


## **Related Resources**

- [Technology Stack](https://www.google.com/search?q=./tech-stack.md)

- [Unified Project Structure](https://www.google.com/search?q=./unified-project-structure.md)

- [Coding Standards](https://www.google.com/search?q=./coding-standards.md)

- [Testing Strategy](https://www.google.com/search?q=./testing-strategy.md)

- [UI/UX Specification](https://www.google.com/search?q=./ui-ux-spec.md)

- [UI Components](https://www.google.com/search?q=./components.md)

- [Core Workflows](https://www.google.com/search?q=./core-workflows.md)

***
