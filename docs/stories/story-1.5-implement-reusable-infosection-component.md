### Story 1.5: Implement Reusable InfoSection Component

As a developer, I want a reusable `InfoSection.tsx` component, so that I can efficiently build consistent content sections of the page.

#### Acceptance Criteria

1.  The `InfoSection.tsx` component is created, accepting props for `title`, `id`, and `children` (or `content`).
2.  The component is used to render the "Command Your Deals," "Financial Clarity," and "Contact Intelligence" sections on the homepage.
3.  Scroll-to-target functionality (from Header HUD items) correctly navigates to `InfoSection` components by their `id`.
4.  (Shadcn Integration) The background card-like elements within InfoSection use the Shadcn `Card` component, styled to match the dark theme and transparent border.

#### Integration Verification

* The "Deals," "Finance," and "Contacts" sections render correctly on the homepage using the `InfoSection` component.
* Clicking the respective HUD items in the header scrolls the page to the correct `InfoSection`.