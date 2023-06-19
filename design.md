## Design Decisions

### Overview

The goal of this project was to build a React application that consumed the Lord of the Rings API and displayed information about the movies, characters, and quotes. The application was developed using React and TypeScript, while adhering to good code quality and readability standards. In addition, the UI/UX was designed to be well-structured, and the project included a README file with installation, usage, and testing instructions. The website was made to be able to run locally and had a live demo.

### Technology Stack

Based on the requirements, the following technology stack was chosen for this project:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
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

The UI/UX design is visually appealing and user-oriented. It is implemented similar experience from cinema/movie websites where a user is greeted by lists of movies
available and from each movie the user can begin exploration into its details.

Here are some of the decisions taken:

- Used a responsive layout to ensure the website worked well on different devices and screen sizes.
- Implemented a navigation bar/header to provide easy access to different sections of the website.
- Used appropriate typography, colors, and visual elements (from [Chakra UI](https://chakra-ui.com/)) to create an immersive Lord of the Rings-themed experience.
- Implemented loading and error states to handle data fetching and error scenarios gracefully.
- Infinite scrolling where the API response contained a large number.

### Other Considerations

The API has some limitations which needs to be worked around, this might not be good for the performance of the application and experience of the users. For example,
in the `/quote` endpoints, each quote does not come with the character which made the quote, only the character `id`, with this limitation, the two hacky ways to make it work
is to either fetch all the characters at once, no pagination and look up each character `id` from the quote or to fetch the characters on demand(infinite scroll) and
show character names on availability.
