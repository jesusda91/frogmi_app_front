### Feature App

This sample application is designed to display a list of features obtained from an external API. It is built using the following technologies and practices:

- **Main Technologies:**
  - React with Vite as bundler.
  - Sass for styles.
  - Redux Toolkit for state management.
  - Redux Thunk for handling asynchronous actions.
  - Material-UI (MUI) for UI components.

- **Prerequisites:**
  - Node.js installed on your system.

## Getting Started

Follow these steps to set up the application:

1. Clone the repository.
2. Install dependencies. ```npm install```
3. Run the app ```npm run dev```

This will start the development server. Open http://localhost:3000 in your browser to view the application.

## Project Structure

The project follows a clean architecture, where each domain has its dedicated folder in the project structure. Here's the basic project structure:

- **src**
  - **feature**
    - **application**
      - **slices**: Contains Redux slices for state management related to the feature.
        - **user.js**: Redux slice for user-related state.
      - **selectors**: Contains selectors for accessing state slices.
    - **infrastructure**
      - **api.js**: Contains API integration logic for the feature.
    - **presentation**
      - **components**
        - **Card**: Contains components related to login functionality.
          - **index.js**: Entry point for the Login component.
          - **Card.scss**: Styles for the Login component.
      - **pages**
        - **FeatureList.js**: Contains the Login page component.
  - **another_domain**: Contains folders and files related to another domain, following a similar structure.
  - **shared**: Contains shared components, utilities, or resources used across multiple features, following a similar structure.


## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.