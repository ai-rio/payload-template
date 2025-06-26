### Story 1.14: Implement Landing Page Pricing Section (`LandingPricingSection`)

As a user, I want to view the pricing plans summarized on the landing page, so that I can quickly assess subscription options.

#### Acceptance Criteria

1.  The `LandingPricingSection.tsx` component renders the "Choose your co-pilot." pricing section from `landing.html`.
2.  It displays the "Creator" and "Business" plans with their details.
3.  The "Join the Waitlist" buttons correctly trigger the `WaitlistModal` specific to the landing page.
4.  (Shadcn Integration) The "Join the Waitlist" buttons use Shadcn `Button` components.

#### Integration Verification

* The pricing section on the landing page is visually correct.
* "Join the Waitlist" buttons open the waitlist modal.