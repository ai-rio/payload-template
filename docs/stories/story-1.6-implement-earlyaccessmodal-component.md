### Story 1.6: Implement EarlyAccessModal Component

As a user, I want to join the waitlist, so that I can get early access to the platform.

#### Acceptance Criteria

1.  The `EarlyAccessModal.tsx` component renders the modal content from `home.html` (`id="early-access-modal"`).
2.  The modal can be opened by various CTA buttons (Hero Section, Footer, Pricing Page's Founder's Key).
3.  The form (`name`, `email`) functions correctly, and on submission, transitions to a success message.
4.  The modal can be closed via a close button.
5.  (Shadcn Integration) The modal structure utilizes Shadcn `Dialog`. Form inputs (`Input`), labels (`Label`), and submit buttons (`Button`) use Shadcn components, customized for styling.

#### Integration Verification

* Clicking the "Request Early Access" button opens the modal.
* Submitting the form displays the success message.
* The modal closes when the close button is clicked.