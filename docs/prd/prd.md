Excellent. Let's proceed.

That concludes the initial `document-project` task. We now have a solid architectural foundation. According to the `brownfield-fullstack` workflow, the next step is to formalize these plans into a set of requirements.

***

Hello, I am John, the Product Manager. My role is to translate our architectural plan into a clear set of requirements and actionable stories. This ensures that the development work is focused, tracked, and directly aligned with your goals.

I will now create a lightweight Product Requirements Document (PRD) specifically for this initial enhancement. This PRD will formally define the work needed to convert your static `home.html` into the dynamic Next.js component structure we just designed.

Here is the Brownfield PRD for the homepage conversion.

***

# Creator's Deal Hub Brownfield Enhancement PRD

## Intro Project Analysis and Context

### Existing Project Overview

* **Current Project State**: A Next.js application with Payload CMS integrated. The project is set up with a specific file structure using the App Router.
* [cite_start]**Enhancement Scope**: The initial task is to convert a static HTML file (`home.html`) into a dynamic, component-based homepage within the existing Next.js `(frontend)` route group. [cite: 988]

### Goals and Background Context

* **Goal 1**: Rapidly launch a functional version of the homepage to begin validating the business model.
* **Goal 2**: Establish a reusable component architecture that will accelerate the development of future pages.
* **Background Context**: The project currently exists as a Next.js/Payload backend with a blank frontend. This effort implements the initial user-facing page based on a completed HTML/CSS/JS design.

## Requirements

### Functional

* **FR1**: The static HTML content must be broken down into reusable React components as defined in the Frontend Architecture document.
* **FR2**: The `StarfieldCanvas.tsx` component must encapsulate and render the Three.js animation.
* **FR3**: All client-side interactivity (modals, buttons, animations) must be implemented within their respective components using React hooks (`useState`, `useEffect`).
* **FR4**: The final homepage at the root URL (`/`) must be visually identical to and have all the functionality of the original `home.html` file.
* **FR5**: All styling from the static file must be moved to the global `styles.css` file.

## Epic and Story Structure

This enhancement will be managed under a single, focused epic.

### Epic 1: Homepage Conversion

**Epic Goal**: To convert the static `home.html` file into a fully functional, component-based page in the Next.js application, laying the foundation for future frontend development.

**Stories**:

* **Story 1.1: Implement Header Component**
    * **As a user, I want** to see the site's main navigation header, **so that** I can navigate the site.
    * **Acceptance Criteria**: The `Header.tsx` component renders the `<header class="mission-control-hud">` element and its contents.

* **Story 1.2: Implement Footer Component**
    * **As a user, I want** to see the site's footer, **so that** I can access secondary links and company information.
    * **Acceptance Criteria**: The `Footer.tsx` component renders the `<footer class="site-footer">` element and its contents.

* **Story 1.3: Implement Starfield Background Component**
    * **As a user, I want** to see the animated starfield background, **so that** the site has a visually engaging experience.
    * **Acceptance Criteria**: The `StarfieldCanvas.tsx` component correctly initializes and runs the Three.js animation, rendering the `<canvas id="bg-canvas">`.

* **Story 1.4: Implement Hero Section Component**
    * **As a user, I want** to see the main hero section, **so that** I understand the site's primary value proposition.
    * **Acceptance Criteria**: The `HeroSection.tsx` component renders the `<section class="hero-section">` and its "Request Early Access" button.

* **Story 1.5: Implement Reusable InfoSection Component**
    * **As a developer, I want** a reusable `InfoSection.tsx` component, **so that** I can efficiently build the content sections of the page.
    * **Acceptance Criteria**: The component accepts props for `title`, `id`, and `children` and is used to render the "Deals," "Finance," and "Contacts" sections.

* **Story 1.6: Implement Modal Components**
    * **As a user, I want** to interact with the login and waitlist modals, **so that** I can sign in or join the waitlist.
    * **Acceptance Criteria**: The `AuthModal.tsx`, `WaitlistModal.tsx`, and `CommandDeck.tsx` components are created and functional.

* **Story 1.7: Assemble Homepage**
    * **As a developer, I want** to assemble the complete homepage, **so that** all components are integrated into a final page.
    * **Acceptance Criteria**: The `src/app/(frontend)/page.tsx` file imports all the created components and renders a complete, functional page identical to `home.html`.

***

