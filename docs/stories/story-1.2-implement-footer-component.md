### Story 1.2: Implement Footer Component

As a user, I want to see the site's footer, so that I can access secondary links and company information.

#### Acceptance Criteria

1.  The `Footer.tsx` component renders the `<footer class="site-footer">` element and its contents from `home.html`.
2.  All links within the footer (Navigation, Company, Legal, Social) are correctly implemented as internal Next.js links or external `<a>` tags.
3.  (Shadcn Integration) Any buttons or links within the footer use Shadcn `Button` (e.g., `variant="link"`) or similar components.

#### Integration Verification

* The footer appears correctly at the bottom of the homepage.
* All footer links are clickable and navigate to their respective destinations.