### Story 1.8: Implement CommandDeck Component

As a user, I want to access navigation links on mobile devices, so that I can move between different sections of the site.

#### Acceptance Criteria

1.  The `CommandDeck.tsx` component renders the full-screen mobile navigation overlay from `home.html` (`id="command-deck"`).
2.  It is triggered by the mobile navigation toggle in the `Header`.
3.  All navigation links (`blog.html`, `pricing.html`, `about.html`, `login.html`) are correctly implemented as Next.js links.
4.  The close button correctly hides the `CommandDeck`.
5.  (Shadcn Integration) The underlying mobile drawer functionality uses Shadcn `Sheet` or `Dialog` to provide built-in accessibility and animations.

#### Integration Verification

* Clicking the hamburger icon in the header opens the `CommandDeck`.
* All links within the `CommandDeck` navigate to their respective pages.
* Clicking the close button hides the `CommandDeck`.