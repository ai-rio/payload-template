### Story 1.9: Implement Landing Page Main Components and Layout (`/landing`)

As a user, I want to view the interactive demo landing page, so that I can experience the key features of the Creator's Deal Hub.

#### Acceptance Criteria

1.  The `src/app/(frontend)/landing/page.tsx` renders the overall layout and main sections of `landing.html`.
2.  The main header (`main-header`) is integrated, correctly appearing on scroll.
3.  The hero section with "Overwhelmed is Over." is displayed.
4.  The "Scroll to explore" indicator functions correctly.
5.  The general structure of the "Features," "Testimonials," and "Pricing" sections is present.
6.  The `ParticleCanvas` component (from `landing.html`) is integrated as a background element.
7.  (Shadcn Integration) The main header (`LandingHeader`) is a custom component, but any internal interactive elements use Shadcn components (e.g., `Button` for "Join the Waitlist").

#### Integration Verification

* The `/landing` page loads without errors and its initial view matches `landing.html`.
* The header appears when scrolling down and hides when scrolling up.
* The background particle animation is visible.