// A large-scale Express app is structured using layered
// architecture (routes, controllers, services, models,
// middleware) to ensure separation of concerns, scalability,
// and maintainability.

// project/
// │
// ├── src/
// │   ├── controllers/
// │   ├── services/
// │   ├── models/
// │   ├── routes/
// │   ├── middlewares/
// │   ├── config/
// │   ├── utils/
// │   ├── validations/
// │   └── app.js
// │
// ├── tests/
// ├── package.json
// └── server.js

// 1. Routes
// - Define API endpoints
// - Connect routes to controllers

// 2. Controllers
// - Handle incoming requests
// - Validate input
// - Call services for business logic

// 3. Services
// - Contain business logic
// - Interact with models for data access

// 4. Models
// - Define data schemas (e.g., using Mongoose for MongoDB)
// - Handle database interactions

// 5. Middleware
// - Handle cross-cutting concerns (e.g., authentication, logging, error handling)

// 6. Config
// - Store configuration settings (e.g., database connection, API keys)

// 7. Utils
// - Helper functions and utilities

// 8. Validations
// - Define validation schemas (e.g., using Joi or express-validator)

