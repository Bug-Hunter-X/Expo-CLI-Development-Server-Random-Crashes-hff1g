# Expo CLI Development Server Random Crashes

This repository demonstrates a bug where the Expo CLI development server crashes randomly without providing any error messages in the terminal. The app runs smoothly and then unexpectedly stops, necessitating a manual server restart. The issue is intermittent and affects both Android and iOS simulators across different projects.

## Bug Reproduction

1. Clone this repository.
2. Navigate to the project directory.
3. Run `expo start`.
4. Observe the development server. The server might crash at any time without any clear explanation in the terminal log.

## Potential Solutions

The solution file (expoBugSolution.js) explores strategies to troubleshoot and resolve this issue, focusing on areas such as debugging Expo, checking logs, and improving the project's overall stability. 