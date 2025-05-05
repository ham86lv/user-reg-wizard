# User Registration Wizard

This project implements a multistep user registration form using React, Material-UI, and TypeScript. It supports both
development and production environments, with Docker-based deployment for production. The tests are written using React
Testing Library and Vitest, and provide examples for testing form validation and navigation.

## Project Structure

```
├── nginx/
│   └── nginx.conf                  # Nginx configuration for serving the app
├── src/
│   ├── features/                   # Features like registration form
|       └── registration/
│           ├── components/steps    # Registration form steps
│           ├── config              # Step configuration
│           ├── interfaces          # Interfaces
│           ├── schema              # Validation schemas (Yup)
│           ├── store               # Zustand store and state provider
│           └── types               # Shared types for fields/values
│   ├── theme/                      # Material-UI theme configurations
│   ├── tests/                      # Unit and integration tests
│   ├── App.tsx                     # Main entry point for the app
│   ├── main.tsx                    # React entry file for mounting the app
|   |-- index.html                  # The HTML file used by React to mount
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── Dockerfile                      # Dockerfile for production environment
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

## Requirements

- **Node.js 20.x**
- **Docker** (for production deployment)
- **Nginx** (used in production setup)

### Running the Project Locally (Development Mode)

1. Clone the repository:

   ```bash
   git clone https://github.com/ham86lv/user-reg-wizard
   cd your-project-directory
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000` by default.

### Running the Project in Production Mode (Without Docker)

1. Build the app:

   ```bash
   npm run build
   ```

2. Serve the app using a simple static server (e.g., `serve`):

   ```bash
   npm install -g serve
   serve -s dist
   ```

   The app will be served at `http://localhost:3000` by default.

### Running the Project in Production Mode (With Docker)

1. Build the Docker image:

   ```bash
   docker build -t user-reg-wizard -f ./Dockerfile .
   ```

2. Run the container:

   ```bash
   docker run -d -p 3000:80 user-reg-wizard
   ```

   The app will be available at `http://localhost:3000`.

### Running Tests

This project uses **Vitest** for testing. To run the tests:

1. Run the tests:

   ```bash
   npm run test
   ```

    - **Note**: The current tests are provided as examples. They focus on basic validation and navigation logic and are
      **not exhaustive**. Extend them for full coverage.

## Project Features

- **Multistep Registration**: User details, address details, and account setup.
- **Form Validation**: Yup schema validation with error messages.
- **Responsive UI**: Built with Material-UI.
- **Dockerized Production**: Easy deployment with Nginx and Docker.

## Technologies Used

- **React**
- **TypeScript**
- **Material-UI**
- **Yup**
- **React Hook Form**
- **Vitest**
- **Docker**