### Story 1.12: Implement Cashflow Chart (`CashflowChart`)

As a user, I want to see my projected income with a dynamic chart on the landing page, so that I understand the financial clarity provided by the platform.

#### Acceptance Criteria

1.  The `CashflowChart.tsx` component renders the "Get paid. Get smarter." section from `landing.html`.
2.  A Chart.js bar chart (mock data) representing cashflow (Pending, Paid, Overdue) is displayed.
3.  The chart animates into view when the section becomes visible on scroll.

#### Integration Verification

* The cashflow chart section appears on the landing page.
* The chart renders and animates when scrolled into view.