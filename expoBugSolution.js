The exact cause of random Expo CLI crashes is often difficult to pinpoint. However, here are some strategies to investigate and potentially resolve the issue:

1. **Detailed Logging:** Increase the verbosity of Expo's logs.  There might be subtle warnings or errors that are normally suppressed. Add environment variables or change the console level if possible. 
2. **Check System Resources:** Ensure your machine has enough RAM and CPU resources available.  A resource-constrained system might trigger unexpected crashes.
3. **Clean Project:** Sometimes, corrupted files or cache in the project directory can lead to unexpected behaviors.  Try cleaning the project (e.g., deleting `node_modules` and `yarn.lock` and reinstalling dependencies).
4. **Expo SDK Version:**  Make sure you're using a recent and stable version of the Expo SDK. Outdated versions can have compatibility issues or unfixed bugs. 
5. **Dependency Conflicts:** Conflicts between different packages can cause unpredictable behavior. Carefully review your package.json and consider using a dependency management tool like yarn or npm to resolve conflicts.
6. **Simulator Issues:** If the issue occurs only in simulators, try cleaning up the simulators or using real devices for testing. 
7. **Background processes:**  Identify and stop or disable any competing background processes that might interfere with the Expo development server. 
8. **Examine Logs:** Look for patterns in the timing or nature of crashes in relation to specific actions in your app. This will enable you to narrow the scope of debugging. 

If the problem persists despite these steps, a more detailed analysis of the project's codebase and environment settings may be necessary.