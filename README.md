# Full Stack Notes App

## Backend
This is the backend part of a full stack application built using Ruby on Rails with PostgreSQL as the database. Below you'll find information about the project's structure, dependencies, and other relevant details.

## Table of Contents
- [Dependencies](#dependencies)
- [Ruby Version](#ruby-version)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Server](#running-the-server)
- [Additional Notes](#additional-notes)

## Dependencies
The backend of this application relies on several Ruby gems to function properly. Here are the main dependencies:

- **Rails 7.1.3**
- **PostgreSQL 1.5.4**
- **Puma 6.4.2**
- **bcrypt 3.1.20**
- **rack-cors 2.0.1**
- **bootsnap 1.17.1**

For a detailed list of all dependencies, please refer to the Gemfile.lock file in the backend folder.

## Ruby Version
This project is developed using Ruby version 3.2.2 (p53).

## Getting Started
To set up the backend of the application, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend folder: `cd <repository-folder>/backend`
3. Install dependencies: `bundle install`

## Configuration
Make sure to configure any necessary environment variables. Common configuration files such as `database.yml` and `application.yml` can be found in the `config` folder.

## Database Setup
Ensure that PostgreSQL is installed and running on your system. Update the `config/database.yml` file with your PostgreSQL configuration.

Run the following commands to create and migrate the database:

```bash
rails db:create
rails db:migrate
```

## Running the Server
Start the Rails server with the following command:

```bash
rails s
```
The server will be running at http://localhost:3000 by default.

# Frontend

The frontend of this application is built with Vite and React. Below you'll find information about the project's structure, dependencies, and other relevant details.

## Table of Contents
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Development](#development)
- [Linting](#linting)
- [Build](#build)

## Dependencies
The frontend relies on the following key dependencies:

- **React 18.2.0**
- **React DOM 18.2.0**
- **React Router DOM 6.21.3**
- **React Icons 5.0.1**
- **@emotion/styled 11.11.0**

For a detailed list of all dependencies, please refer to the `package.json` file in the frontend folder.

## Scripts
The following scripts are available for managing the frontend:

- **dev**: Run the development server with Vite.
- **build**: Build the production-ready application.
- **lint**: Lint the code using ESLint with specific configurations.
- **preview**: Preview the production build locally.

## Development
To start the development server, use the following command:

```bash
npm run dev
```

The development server will be running at `http://localhost:3000` by default.

## Linting
Lint the code using ESLint with the following command:

```bash
npm run lint
```

This ensures code quality and adherence to coding standards.

## Build
Build the production-ready application using the following command:

```bash
npm run build
```

The built files will be available in the `dist` folder.

Feel free to customize this README to include any additional information specific to your frontend application.

## Additional Notes
The backend uses Action Cable for real-time features, such as websockets.
The backend project is configured to use Puma as the application server.
The frontend is already connected to the backend for making requests and both need to be running for the app to work.
The default user data is:
- email: test@mail.com
- password: 123123
