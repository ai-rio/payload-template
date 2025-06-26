# UI Components

## Overview

# This document details the reusable UI components for the Creator's Deal Hub frontend application. It defines their purpose, structure, properties (props), states, and usage guidelines, ensuring consistency, reusability, and maintainability across the user interface. Components are designed with a mobile-first philosophy, utilizing React 19.1.0, TypeScript, and Tailwind CSS 4.1.10.

### Change Log

# | Date       | Version | Description                                             | Author  |
| ---------- | ------- | ------------------------------------------------------- | ------- |
| 2025-06-25 | 0.1     | Initial draft based on home.html and other static files | Winston |

## Core UI Components

# The following components are identified as key building blocks for the Creator's Deal Hub, primarily derived from the structure of `home.html` and other static pages.

### Header

# - **Purpose**: The main navigation header of the site, providing branding (CDH logo), key metrics (Active Deals, Overdue Invoices, Key Contacts), and a mobile navigation toggle.

- **Source HTML Reference**: `<header class="mission-control-hud">...</header>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/Header.tsx`.

- **Props**:

  - `activeDealsCount: number` (for dynamic display of active deals)

  - `overdueInvoicesCount: number` (for dynamic display of overdue invoices, potentially with `overdue` status for styling)

  - `keyContactsCount: number` (for dynamic display of key contacts)

- **States**:

  - `isCommandDeckOpen: boolean` (to control visibility of the mobile navigation overlay).

- **Usage Guidelines**: This component is intended for placement in the root `layout.tsx` of the `(frontend)` route group to appear on all public-facing pages. Its internal logic includes handling the mobile navigation toggle and displaying dynamic HUD-style metrics.

### CommandDeck (Mobile Navigation Overlay)

# - **Purpose**: A full-screen overlay for mobile navigation, providing links to various sections of the site (Blog, Pricing, About Us, Login).

- **Source HTML Reference**: `<div id="command-deck">...</div>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/CommandDeck.tsx` (suggested).

- **Props**:

  - `isOpen: boolean` (to control its visibility, likely driven by Header's state).

  - `onClose: () => void` (callback to close the overlay).

- **States**: None, relies on `isOpen` prop.

- **Usage Guidelines**: This component will be rendered conditionally, likely within the `Header` or `layout.tsx`, and its visibility will be toggled by the header's mobile navigation button.

### Footer

# - **Purpose**: The site-wide footer, providing secondary navigation links (Home, Deals, Pricing, Blog), company information (About Us, Careers, Contact), legal links (Privacy Policy, Terms of Service), and social media links.

- **Source HTML Reference**: `<footer class="content-section site-footer">...</footer>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/Footer.tsx` (suggested).

- **Props**: None.

- **States**: None.

- **Usage Guidelines**: Similar to the Header, this component is suitable for placement in the root `layout.tsx` of the `(frontend)` route group.

### StarfieldCanvas (3D Background)

# - **Purpose**: Renders an animated 3D starfield background using Three.js, providing a visually engaging experience.

- **Source HTML Reference**: `<canvas id="bg-canvas">...</canvas>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/StarfieldCanvas.tsx`.

- **Props**: None.

- **States**: None.

- **Usage Guidelines**: This component should be a client component (`"use client";`) due to its reliance on browser APIs (Canvas, WebGL). It is typically rendered as a fixed background element.

### HeroSection

# - **Purpose**: The main introductory section of the homepage, featuring a prominent headline, value proposition, and a "Request Early Access" Call-to-Action (CTA) button.

- **Source HTML Reference**: `<section class="hero-section" id="hero-section">...</section>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/HeroSection.tsx` (suggested).

- **Props**:

  - `onRequestEarlyAccess: () => void` (callback for CTA button click).

- **States**: None.

- **Usage Guidelines**: This component will be part of `src/app/(frontend)/page.tsx`. Its CTA button should trigger the `EarlyAccessModal`.

### InfoSection (Reusable Content Section)

# - **Purpose**: A reusable component for displaying content sections with a title and descriptive text, used for "Command Your Deals," "Financial Clarity," and "Contact Intelligence" sections on the homepage.

- **Source HTML Reference**: `<section class="content-section" id="deals-section">...</section>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/InfoSection.tsx` (suggested).

- **Props**:

  - `title: string` (main heading for the section).

  - `id: string` (HTML ID for linking from HUD items, e.g., "deals-section").

  - `children: React.ReactNode` (content of the section, typically a paragraph).

- **States**: None.

- **Usage Guidelines**: This component promotes reusability for similar content blocks across the site.

### EarlyAccessModal (Waitlist Modal)

# - **Purpose**: A modal overlay for users to join a waitlist by submitting their name and email. Displays a success message upon submission.

- **Source HTML Reference**: `<div id="early-access-modal" class="modal">...</div>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/EarlyAccessModal.tsx` (suggested).

- **Props**:

  - `isOpen: boolean` (to control modal visibility).

  - `onClose: () => void` (callback to close the modal).

  - `onSubmit: (name: string, email: string) => void` (callback for form submission).

- **States**:

  - `showSuccess: boolean` (to toggle between form and success message views).

  - `name: string`, `email: string` (for form input).

- **Usage Guidelines**: This component will be controlled by state in `page.tsx` or a parent component, opening when relevant CTA buttons are clicked.

### AuthModal (Login/Signup Modal)

# - **Purpose**: A modal overlay for user authentication, allowing users to switch between "Sign In" and "Sign Up" forms.

- **Source HTML Reference**: `<div id="auth-modal" class="modal">...</div>` from `home.html`.

- **File Location**: `src/app/(frontend)/components/AuthModal.tsx` (suggested).

- **Props**:

  - `isOpen: boolean`.

  - `onClose: () => void`.

  - `onSignIn: (email: string, password: string) => void`.

  - `onSignUp: (name: string, email: string, password: string) => void`.

- **States**:

  - `currentView: 'signin' | 'signup'` (to toggle between forms).

  - `email: string`, `password: string`, `name: string` (for form inputs).

- **Usage Guidelines**: Triggered by the "Login" link in the Command Deck.

### FoundersKeyCard (Pricing Page Specific)

# - **Purpose**: A prominent card on the pricing page highlighting a special "Founder's Circle" offer with a countdown timer and a call to action.

- **Source HTML Reference**: `<div class="founders-key-card">...</div>` from `pricing.html`.

- **File Location**: `src/app/(frontend)/components/FoundersKeyCard.tsx` (suggested).

- **Props**:

  - `onClaimOffer: () => void` (callback for CTA button click, likely opens EarlyAccessModal).

- **States**:

  - `countdown: string` (to display the remaining time).

- **Usage Guidelines**: Specific to the pricing page.

### PricingCard (Pricing Page Specific)

# - **Purpose**: Reusable component for displaying different pricing plans (Creator, Business), including features, price, and a call to action.

- **Source HTML Reference**: `<div class="pricing-card">...</div>` from `pricing.html`.

- **File Location**: `src/app/(frontend)/components/PricingCard.tsx` (suggested).

- **Props**:

  - `planName: string`.

  - `description: string`.

  - `monthlyPrice: string`.

  - `annuallyPrice: string`.

  - `features: string[]`.

  - `isPopular?: boolean`.

  - `onChoosePlan: () => void`.

  - `billingPeriod: 'monthly' | 'annually'` (to toggle displayed price).

- **States**: None.

- **Usage Guidelines**: Used multiple times on the pricing page to display different plans.

### BillingToggle (Pricing Page Specific)

# - **Purpose**: Toggles between monthly and annual billing periods on the pricing page, updating displayed prices.

- **Source HTML Reference**: `<div class="billing-toggle">...</div>` from `pricing.html`.

- **File Location**: `src/app/(frontend)/components/BillingToggle.tsx` (suggested).

- **Props**:

  - `onToggle: (period: 'monthly' | 'annually') => void` (callback to update parent's billing period state).

  - `currentPeriod: 'monthly' | 'annually'`.

- **States**: None, controlled by `currentPeriod` prop.

- **Usage Guidelines**: Used on the pricing page to control `PricingCard` prices.

### MissionCard (Careers Page Specific)

# - **Purpose**: Displays individual "open missions" (job postings) on the careers page.

- **Source HTML Reference**: `<div class="mission-card">...</div>` from `carreers.html`.

- **File Location**: `src/app/(frontend)/components/MissionCard.tsx` (suggested).

- **Props**:

  - `title: string`.

  - `department: string`.

  - `location: string`.

  - `briefing: string` (HTML content for the modal).

  - `onViewBriefing: (mission: MissionData) => void`.

- **States**: None.

- **Usage Guidelines**: Renders job listings on the careers page.

### MissionBriefingModal (Careers Page Specific)

# - **Purpose**: Displays detailed briefing for a selected job mission and allows users to apply via a form. Includes a multi-view flow (briefing, form, success).

- **Source HTML Reference**: `<div id="mission-briefing-modal">...</div>` from `carreers.html`.

- **File Location**: `src/app/(frontend)/components/MissionBriefingModal.tsx` (suggested).

- **Props**:

  - `isOpen: boolean`.

  - `onClose: () => void`.

  - `mission: MissionData` (object containing title, location, briefing).

  - `onSubmit: (formData: any) => void`.

- **States**:

  - `currentView: 'briefing' | 'apply' | 'success'`.

- **Usage Guidelines**: Opens when a `MissionCard` is clicked.

### TriageCard (Contact Page Specific)

# - **Purpose**: Allows users to select a communication channel (Demo, Press, General) on the contact page.

- **Source HTML Reference**: `<div class="triage-card">...</div>` from `contact.html`.

- **File Location**: `src/app/(frontend)/components/TriageCard.tsx` (suggested).

- **Props**:

  - `title: string`.

  - `description: string`.

  - `formType: 'demo' | 'press' | 'general'`.

  - `onSelect: (formType: 'demo' | 'press' | 'general') => void`.

- **States**: None.

- **Usage Guidelines**: Renders channel options on the contact page.

### ContactFormView (Contact Page Specific)

# - **Purpose**: Displays a dynamic contact form based on the selected channel (Demo, Press, General Inquiry).

- **Source HTML Reference**: `<div id="form-container-view">...</div>` from `contact.html`.

- **File Location**: `src/app/(frontend)/components/ContactFormView.tsx` (suggested).

- **Props**:

  - `isOpen: boolean`.

  - `formTitle: string`.

  - `formFields: string` (raw HTML string of form inputs, dynamically set).

  - `onBack: () => void`.

  - `onSubmit: (formData: any) => void`.

- **States**:

  - Form input states.

- **Usage Guidelines**: Renders the specific contact form after a `TriageCard` is selected.

### SuccessMessageView (Contact Page Specific)

# - **Purpose**: Displays a success message after a contact form submission.

- **Source HTML Reference**: `<div id="success-view">...</div>` from `contact.html`.

- **File Location**: `src/app/(frontend)/components/SuccessMessageView.tsx` (suggested).

- **Props**:

  - `isOpen: boolean`.

  - `message: string`.

- **States**: None.

- **Usage Guidelines**: Displays after a form submission.

### HoloPanel (404 Page Specific)

# - **Purpose**: A central panel on the 404 page, displaying "Signal Lost" message and a "Re-establish Connection" button.

- **Source HTML Reference**: `<div class="holo-panel">...</div>` from `404_Signal_Lost.html`.

- **File Location**: `src/app/(frontend)/components/HoloPanel.tsx` (suggested).

- **Props**: None.

- **States**: None.

- **Usage Guidelines**: Specific to the 404 page (likely `src/app/(frontend)/not-found.tsx` in Next.js).

## Component Design Principles

# - **Reusability**: Design components to be as generic and reusable as possible, accepting props to customize content and behavior.

- **Single Responsibility Principle**: Each component should ideally have one primary reason to change.

- **Composition**: Prefer composing smaller, simpler components to build more complex UI elements.

- **Accessibility**: All components must adhere to accessibility guidelines (e.g., semantic HTML, keyboard navigation, ARIA attributes).

- **Responsiveness (Mobile-First)**: Components are built and styled with a mobile-first approach using Tailwind CSS, ensuring proper display and functionality across various screen sizes.

- **Performance**: Optimize components for performance (e.g., memoization where appropriate, efficient rendering).

## Usage Guidelines

# - **Props**: Clearly define prop types using TypeScript interfaces for better developer experience and type safety.

- **Styling**: Primarily use Tailwind CSS utility classes. For complex or component-specific styles not easily achievable with utilities, utilize CSS Modules or extend Tailwind.

- **Client vs. Server Components**: Differentiate between "use client" components (interactive, browser-specific logic) and server components (static rendering, data fetching on the server) appropriately.

## Related Resources

# - [Frontend Architecture](https://www.google.com/search?q=./frontend-architecture.md)

- [UI/UX Specification](https://www.google.com/search?q=./ui-ux-spec.md) (to be created, will provide higher-level design details)

- [Coding Standards](https://www.google.com/search?q=./coding-standards.md)
