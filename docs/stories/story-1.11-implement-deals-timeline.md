### Story 1.11: Implement Deals Timeline (`DealsTimeline`)

As a user, I want to visualize active brand deals on the landing page, so that I can see how the platform helps manage collaborations.

#### Acceptance Criteria

1.  The `DealsTimeline.tsx` component renders the "Command your deals." section from `landing.html`.
2.  Mock deal data is displayed as horizontal bars on a timeline.
3.  Hovering over deal bars displays a detailed popover with deal name, status, value, and next actions.
4.  The popover's positioning adjusts dynamically to avoid screen edges.
5.  (Shadcn Integration) The popover for deal details utilizes Shadcn `Popover`.

#### Integration Verification

* The deals timeline is visible and interactive on the landing page.
* Hovering over deal bars correctly shows popover details.