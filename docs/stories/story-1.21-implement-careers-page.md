### Story 1.21: Implement Careers Page (`/careers`)

As a user, I want to view open job opportunities, so that I can potentially join the Creator's Deal Hub team.

#### Acceptance Criteria

1.  The `src/app/(frontend)/careers/page.tsx` renders the content of `carreers.html`.
2.  "Our Core Code" sections are displayed with their specific styling.
3.  "Open Missions" are dynamically rendered using `MissionCard` components.
4.  Clicking a `MissionCard` opens the `MissionBriefingModal` with the correct briefing content.
5.  The job application form within the modal allows input and displays a success message upon simulated submission.
6.  (Shadcn Integration) `MissionCard` buttons use Shadcn `Button`. `MissionBriefingModal` uses Shadcn `Dialog` and form components (`Input`, `Textarea`, `RadioGroup`, `Button`).

#### Integration Verification

* The `/careers` page loads correctly and is visually identical to `carreers.html`.
* Clicking a job card opens the mission briefing modal with relevant details.
* The application form in the modal functions as expected.