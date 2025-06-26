### Story 1.10: Implement AI Co-Pilot Feature (`AITypingDemo`)

As a user, I want to interact with the AI co-pilot demo on the landing page, so that I can understand its strategic insight capabilities.

#### Acceptance Criteria

1.  The `AITypingDemo.tsx` component encapsulates the "Ask anything. Understand everything." section from `landing.html`.
2.  Clicking on prompt chips (`roi`, `income`, `followup`) triggers the AI response simulation.
3.  The thinking indicator and typing animation are correctly displayed.
4.  The response text is typed out character by character.
5.  For applicable prompts (ROI, Income), a mock Chart.js graph is displayed below the typed response.
6.  (Shadcn Integration) The prompt chips utilize Shadcn `Button` components, customized for their appearance.

#### Integration Verification

* Clicking prompt chips on the landing page activates the AI demo.
* AI responses are typed out, and charts appear as expected.