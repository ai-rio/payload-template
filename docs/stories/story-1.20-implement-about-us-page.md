### Story 1.20: Implement About Us Page (`/about`)

As a user, I want to learn about Creator's Deal Hub's mission and team, so that I can understand its philosophy.

#### Acceptance Criteria

1.  The `src/app/(frontend)/about/page.tsx` renders the content of `about.html`.
2.  The "Manifesto" sections (`Clarity over Chaos`, `Data is Art`, etc.) are correctly displayed with their specific styling and number overlays.
3.  The "Architects" team grid is displayed.
4.  Any animations or visual effects present in the original `about.html` are correctly implemented.

#### Integration Verification

* The `/about` page loads correctly and is visually identical to `about.html`.
* Scrolling through the manifesto sections correctly triggers any associated Three.js particle animations.