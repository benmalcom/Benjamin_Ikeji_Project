## Design Decisions

### Overview

The goal of this project is to build a React application that consumes the Lord of the Rings API and displays information about the movies, characters, and quotes.
The application was developed using React and TypeScript, with an emphasis on code quality and readability. The UI/UX design aimed to create an immersive Lord of the Rings-themed experience.
The project includes a README file with installation, usage, and testing instructions, and there's provision to run it locally and also online with the live demo link provided.

### Technology Stack

Based on the requirements, the following technology stack was chosen for this project:

- [React](https://react.dev/): A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript that improves code maintainability and scalability.
- [Next.js](https://nextjs.org/): A React framework that enables server-side rendering, static site generation, and other powerful features for building fast and scalable web applications.
- [Chakra UI](https://chakra-ui.com/): A component library for React that provides customizable and accessible UI components.
- [TanStack Query](https://tanstack.com/query/v4): A powerful data-fetching and caching library for handling API requests.
- ...and other relevant libraries or tools specific to the project's needs.

### Project Structure

The project structure was organized to promote code reusability, maintainability, and scalability as the project grows:

- public/ -
  - images
  - ...
- src/
  - components/
    - common/
    - features/
    - layouts
    - ...
  - config/
    - ...
  - data/
    - ...
  - services/
    - http.ts
  - styles/
    - ...
  - utils/
    - ...
  - pages/
    - ...
  - hooks/
    - ...
  - App.tsx
  - index.tsx
- .gitignore
- package.json
- README.md
- design.md
- ...

### UI/UX Design

The UI/UX design aimed to create an engaging and user-friendly Lord of the Rings-themed experience. The following design decisions were implemented:

- Chakra UI was chosen as the CSS framework for its component-based approach, accessibility, responsive styles, developer-friendly API, theming capabilities, and active community support.
- Utilized a responsive layout to ensure optimal viewing on various devices and screen sizes.
- Implemented a navigation bar or header to enable easy navigation between different sections of the website.
- Incorporated appropriate typography, colors, and visual elements from the Chakra UI library to align with the Lord of the Rings theme.
- Handled loading and error states gracefully to provide a seamless experience during data fetching and error scenarios.
- Implemented infinite scrolling in cases where the API response contained a large number of items, ensuring a smoother browsing experience.
- Utilized Loading Skeletons to provide visual feedback and enhance the user experience while waiting for data to load.

### Other Considerations

- Due to limitations in the Lord of the Rings API, some workarounds were implemented:
  - Character identification: Since the API does not provide character names directly with quotes, character IDs were used to fetch and associate character names.
  - Unified character endpoint: As there are no individual character endpoints for each movie, the same characters endpoint was fetched for all movies.
- To enhance the UI/UX and provide additional information, self-sourced resources were utilized, such as the `/data/metaInformation.json` file which contains additional movie details not available directly from the API.
