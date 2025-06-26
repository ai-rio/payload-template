### Story 1.4: Implement Hero Section Component

As a user, I want to see the main hero section, so that I understand the site's primary value proposition.

#### Acceptance Criteria

1.  The `HeroSection.tsx` component renders the `<section class="hero-section">` and its contents from `home.html`.
2.  The "Request Early Access" button correctly triggers the `EarlyAccessModal`.
3.  (Shadcn Integration) The "Request Early Access" button utilizes the Shadcn `Button` component, customized for its unique glowing visual effect.

#### Integration Verification

* The hero section displays correctly with all text and the CTA button.
* Clicking the CTA button opens the `EarlyAccessModal`.