# Star Wars Characters Viewer

A web application that allows users to view a list of Star Wars characters and their associated starships and movies. Built with React and Vite.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

Follow these steps to get your development environment set up:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

**Clone the repository**:

```bash
git clone https://github.com/pokemondeveloper/star_wars
cd starwars
```

## Folder Structure

The project structure is organized as follows:

### Explanation

- **public/**: This directory contains static files that are served directly by the server.

- **src/**: This is where the main source code of the application resides.

  - **api/**: Contains API service files for making HTTP requests to external services.
  - **assets/**: Contains images and other static assets used in the application, such as icons or logos.
  - **components/**: Contains reusable React components that can be used throughout the application.
  - **constants/**: Contains constant values used throughout the application to maintain consistency.
  - **context/**: Provides context providers for managing state across the application, allowing for efficient data flow.
  - **helpers/**: Utility functions that assist in various tasks, helping to keep code DRY (Don't Repeat Yourself).
  - **hooks/**: Custom React hooks for shared logic that can be reused across components.
  - **layout/**: Contains layout components that help in organizing the UI structure of the application.
  - **pages/**: Page components that represent different views in the application, serving as entry points for routing.
  - **service/**: Services for handling business logic and API interactions, separating concerns for cleaner architecture.
  - **theme/**: Configuration for theming and styling the application, helping to maintain a consistent design.
  - **types/**: TypeScript type definitions that provide type safety and improve code quality.
  - **app.tsx**: The main application component that serves as the entry point for the React application.
  - **index.css**: Global CSS styles for the application, providing basic styling rules.
  - **main.tsx**: The entry point of the application where React is rendered into the DOM.
  - **vite-env.d.ts**: Type definitions for Vite environment variables, ensuring type safety when using Vite features.

- **.gitignore**: Specifies files and directories that should be ignored by Git, preventing unnecessary files from being tracked.
- **.eslint.config.js**: Configuration file for ESLint, a tool for identifying and reporting on patterns in JavaScript and TypeScript code.
- **index.html**: The main HTML file for the application, serving as the template for the React application.
- **jest.config.js**: The configuration file for Jest, a JavaScript testing framework. It allows you to customize various settings for running tests in your application, such as the test environment, module file extensions, and coverage reporting.
- **jest.setup.js**: A setup file that runs before your test suite. It is used to configure or set up the testing environment, including global variables, mocking libraries, and any necessary initialization for your tests. This file can also be used to import any polyfills or configurations needed to ensure that your tests run smoothly.
- **postcss.config.js**: Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.
- **README.md**: Contains project documentation, instructions, and information about the application.
- **tailwind.config.js**: Configuration file for Tailwind CSS, a utility-first CSS framework for styling.
- **tsconfig.app.json**: TypeScript configuration specifically for the application, allowing for specific settings and compiler options.
- **tsconfig.json**: Base TypeScript configuration for the project, providing general settings and options.
- **tsconfig.node.json**: TypeScript configuration for Node.js, allowing for proper compilation and execution in a Node environment.
- **vite.config.ts**: Configuration file for Vite, a build tool and development server that provides fast development experiences.
