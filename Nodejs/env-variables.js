//  Environment variables store configuration outside the
// code (e.g., DB passwords, API keys).

// Node.js stores environment variables in separate files
//  (e.g., .env) or sets them in the terminal before
// running the application.

// In Node.js, environment variables are accessed using
// process.env.VARIABLE_NAME.

// Example of setting and accessing an environment variable:
// In the terminal:
// export DB_PASSWORD=secret123

// In Node.js code:
// const dbPassword = process.env.DB_PASSWORD;
// console.log(dbPassword); // Output: secret123

// Benefits of using environment variables:
// 1. Security: Keeps sensitive information out of the codebase.
// 2. Flexibility: Allows different configurations for development,
//    testing, and production environments without changing code.
// 3. Portability: Makes it easier to deploy applications across
//    different platforms and environments.

