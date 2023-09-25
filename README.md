# [GitHub User Avatar Finder Web App](https://git-avatar-search.netlify.app/)

Welcome to the documentation for the GitHub User Avatar Finder Web App. This documentation will guide you through the usage, features, and implementation details of this web application.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The GitHub User Avatar Finder Web App is a simple web application that allows you to find and display the avatar and username of GitHub users by entering their usernames. It's built with React and makes use of custom hooks to fetch and display user data from the GitHub API.

## Installation

To set up and run this web app on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Hruthik-28/GitAvatar-Search.git
2. Navigate to the project directory:

   ```bash
   cd GitAvatar-Search
3. Install the project dependencies using npm:

   ```bash
   npm install
4. Start the development server:

    ```bash
   npm run dev
5. Open your web browser and access the app at http://localhost:5173.

## Usage
1. Launch the app, and you'll see a simple input field where you can enter a GitHub username.
2. As you type a username, the app will automatically fetch the user's avatar and username from GitHub.
3. The user's avatar and username will be displayed below the input field.
4. If the user exists, their avatar and username will be shown. Otherwise, you'll see an empty result.

## Components
  `App.js`
  - The main entry point of the application.
  - Renders the SearchUser component.
    
  `SearchUser.js`
  - The main user interface of the app.
  - Provides an input field for entering a GitHub username.
  - Uses the UseGithub custom hook to fetch user data.
  - Displays the user's avatar and username.

## Custom Hooks
  `UseGithub.js`
  - A custom hook for fetching GitHub user data.
  - Takes a GitHub username as a parameter.
  - Fetches user data from the GitHub API.
  - Returns the user's name, avatar, and other information.

## Contributing
  I welcome contributions from the community. If you find issues, have suggestions, or want to contribute to the development of this project, please follow these steps:
  Fork the repository.

1. Create a new branch for your feature or bug fix.
2. Make your changes and commit them with clear, concise commit messages.
3. Push your changes to your forked repository.
4. Create a pull request with a detailed description of your changes.
5. Our team will review your pull request, provide feedback, and merge it when it's ready.

## License
  This project is licensed under the MIT License. You are free to use, modify, and distribute the code for your own projects.
