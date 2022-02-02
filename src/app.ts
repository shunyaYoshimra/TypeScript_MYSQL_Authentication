// Import Modules
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Define Express Engine
const app: express.Express = express();

// Setting Dotenv
dotenv.config();

// Use Official Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

// Use Private Middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
});

// Difine Routes


// Express Engine Starts!!
app.listen(3000, () => {
  console.log("This Application listening at PORT:3000");
})