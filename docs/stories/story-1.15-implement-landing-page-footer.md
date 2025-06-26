### Story 1.15: Implement Landing Page Footer (`LandingFooter`)

As a user, I want to see the final call to action and copyright information on the landing page, so that I can easily find options for next steps.

#### Acceptance Criteria

1.  The `LandingFooter.tsx` component renders the `final-cta` section from `landing.html`.
2.  The "Get Early Access" button correctly triggers the `WaitlistModal` (from `landing.html`).
3.  The copyright information is displayed correctly.
4.  (Shadcn Integration) The "Get Early Access" button uses a Shadcn `Button` component.

#### Integration Verification

* The footer section is present at the bottom of the landing page.
* The "Get Early Access" button opens the waitlist modal.