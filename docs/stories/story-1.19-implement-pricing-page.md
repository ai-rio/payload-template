### Story 1.19: Implement Pricing Page (`/pricing`)

As a user, I want to view Creator's Deal Hub pricing plans, so that I can choose a subscription that fits my needs.

#### Acceptance Criteria

1.  The `src/app/(frontend)/pricing/page.tsx` renders the content of `pricing.html`.
2.  The page utilizes `FoundersKeyCard`, `PricingCard`, and `BillingToggle` components.
3.  The `BillingToggle` correctly switches between monthly and annual pricing for `PricingCard` components.
4.  The "Claim My Founder's Key" button triggers the `EarlyAccessModal`.
5.  (Shadcn Integration) `FoundersKeyCard` and `PricingCard` buttons use Shadcn `Button`. The `BillingToggle` uses Shadcn `ToggleGroup`.

#### Integration Verification

* The `/pricing` page loads correctly and is visually identical to `pricing.html`.
* The billing toggle accurately updates prices.
* Clicking "Claim My Founder's Key" opens the `EarlyAccessModal`.