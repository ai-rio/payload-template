### Story 1.23: Implement 404 Signal Lost Page (`/404_Signal_Lost`)

As a user, I want to be informed when a page is not found, so that I can re-establish my connection.

#### Acceptance Criteria

1.  The `src/app/(frontend)/404_Signal_Lost/page.tsx` (or `not-found.tsx`) renders the content of `404_Signal_Lost.html`.
2.  The "Re-establish Connection" button correctly navigates back to the homepage (`/`).
3.  The specific 404 page styling, including the glitch effect on the "404" text and the background Three.js animation, is preserved.
4.  (Shadcn Integration) The "Re-establish Connection" button uses a Shadcn `Button` component.

#### Integration Verification

* Navigating to an invalid URL displays the 404 page visually identical to `404_Signal_Lost.html`.
* The "Re-establish Connection" button navigates to the homepage.