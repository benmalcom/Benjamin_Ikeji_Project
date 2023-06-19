## Design Decisions

### Overview

The goal of this project was to build a React application that consumed the Lord of the Rings API and displayed information about the movies, characters, and quotes. The application was developed using React and TypeScript, while adhering to good code quality and readability standards. In addition, the UI/UX was designed to be well-structured, and the project included a README file with installation, usage, and testing instructions. The website was made to be able to run locally and had a live demo.

### Technology Stack

Based on the requirements, the following technology stack was chosen for this project:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [TanStack Query](https://tanstack.com/query/v4)
- ...and others

### Project Structure

The project structure was organized and modular to promote code reusability and maintainability. The chosen project structure was as follows:

- public/
  - images
  - ...
- src/
  - components/
    - common/
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

### UI/UX Design

The UI/UX design is visually appealing and user-oriented. It implements a similar experience as a cinema website (with a Lord of the Rings theme color)
where a user is welcomed by lists of movies available and from each movie the user can begin exploration into its details.

Here are some of the decisions taken:

- Used a responsive layout to ensure the website worked well on different devices and screen sizes.
- Implemented a navigation bar/header to provide easy access to different sections of the website.
- Used appropriate typography, colors, and visual elements (from [Chakra UI](https://chakra-ui.com/)) to create an immersive Lord of the Rings-themed experience.
- Implemented loading and error states to handle data fetching and error scenarios gracefully.
- Infinite scrolling where the API response contained a large number.

### Other Considerations

- The API has some limitations which needs to be worked around, for example there's no way to know which character made a quote because each quote object does not come with
  a character name, just character id. Hence we have to prefetch all the characters and look up the character id of the person who made the quote in other to get their name.
- There's only one unified character endpoint as each movie does not have an endpoint to fetch its own characters, hence we have to fetch the same characters endpoint for all movies.
- Since the API is not robust enough, I adopted some self-sourced resources in the `/data/metaInformation.json` file to further improve the UI/UX.
