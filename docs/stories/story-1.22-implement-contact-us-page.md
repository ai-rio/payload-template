### Story 1.22: Implement Contact Us Page (`/contact`)

As a user, I want to contact Creator's Deal Hub for various inquiries, so that I can get specific assistance.

#### Acceptance Criteria

1.  The `src/app/(frontend)/contact/page.tsx` renders the content of `contact.html`.
2.  The `TriageCard` components correctly allow selection of "Request a Private Demo," "Press & Media Inquiry," or "General Question."
3.  Selecting a `TriageCard` dynamically displays the appropriate form (`ContactFormView`).
4.  Form submission (simulated) displays a success message (`SuccessMessageView`).
5.  The "Select a different channel" link correctly returns to the triage view.
6.  (Shadcn Integration) `TriageCard` can use Shadcn `Card`. `ContactFormView` uses Shadcn `Form`, `Input`, `Textarea`, `Button`, `Label`. `SuccessMessageView` uses Shadcn `Button`.

#### Integration Verification

* The `/contact` page loads correctly and is visually identical to `contact.html`.
* Selecting a triage card changes the displayed form.
* Form submission leads to a success message.
