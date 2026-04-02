// Dependencies are required to run the application
// in production, while devDependencies are only needed
// during development and are not included in the production
// environment.

// Example of dependencies and devDependencies in package.json:
// {
//   "name": "my-app",
//   "version": "1.0.0",
//   "dependencies": {
//     "express": "^4.17.1"
//   },
//   "devDependencies": {
//     "nodemon": "^2.0.7"
//   }
// }

// To install dependencies, you can run:
// npm install --save express

// To install devDependencies, you can run:
// npm install --save-dev nodemon

// Benefits of using dependencies and devDependencies:
// 1. Separation of Concerns: Keeps production and development
//    dependencies separate, making it clear which packages are
//    essential for running the application and which are only
//    needed for development.
// 2. Reduced Production Size: By excluding devDependencies from
//    the production environment, you can reduce the size of the
//    application and improve performance.
// 3. Easier Maintenance: It helps developers manage and update
//    dependencies more effectively, ensuring that the production
//    environment remains stable while allowing for flexibility in
//    development.
