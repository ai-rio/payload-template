### Story 1.16: Implement Waitlist Modal (Landing Page Specific) (`WaitlistModalLanding`)

As a user, I want to join the waitlist from the landing page, so that I can be informed about the platform's launch.

#### Acceptance Criteria

1.  The `WaitlistModalLanding.tsx` component renders the waitlist modal from `landing.html` (`id="waitlist-modal"`).
2.  The modal can be opened by various CTA buttons on the landing page (Hero, Pricing, Footer).
3.  The form (`name`, `email`) functions correctly, and on submission, transitions to a success message with a checkmark animation.
4.  The modal can be closed via a close button or by clicking the backdrop.
5.  (Shadcn Integration) The modal structure uses Shadcn `Dialog`. Form inputs (`Input`), labels (`Label`), and buttons (`Button`) use Shadcn components. The success animation is custom within the Shadcn Dialog.

#### Integration Verification

* Clicking "Join Waitlist" or "Request Early Access" buttons on the landing page opens the modal.
* Submitting the form displays the success message with animation.
* The modal closes when the close button or backdrop is clicked.