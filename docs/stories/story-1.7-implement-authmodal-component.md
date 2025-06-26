### Story 1.7: Implement AuthModal Component

As a user, I want to sign in or sign up, so that I can access my account or create a new one.

#### Acceptance Criteria

1.  The `AuthModal.tsx` component renders the modal content from `home.html` (`id="auth-modal"`).
2.  The modal can be opened via the "Login" link in the `CommandDeck`.
3.  The "Sign In" and "Sign Up" tabs correctly toggle between their respective forms.
4.  Both forms simulate submission (no actual API call needed for this story) and display appropriate feedback.
5.  The modal can be closed via a close button.
6.  (Shadcn Integration) The modal structure uses Shadcn `Dialog`. Form inputs (`Input`), labels (`Label`), and buttons (`Button`) use Shadcn components. The tab functionality uses Shadcn `Tabs`.

#### Integration Verification

* Clicking "Login" in the mobile navigation opens the AuthModal.
* Toggling between "Sign In" and "Sign Up" tabs displays the correct form fields.