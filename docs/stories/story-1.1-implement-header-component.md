### Story 1.1: Implement Header Component

As a user, I want to see the site's main navigation header, so that I can navigate the site.

#### Acceptance Criteria

1.  The `Header.tsx` component renders the `<header class="mission-control-hud">` element and its contents from `home.html`.
2.  The mobile navigation toggle (hamburger icon) correctly opens and closes the `CommandDeck` overlay.
3.  (Shadcn Integration) Any internal interactive elements like buttons use Shadcn `Button` components if appropriate, styled to match the original design.

#### Integration Verification

* The header appears correctly on the homepage.
* The mobile navigation toggle functions as expected.