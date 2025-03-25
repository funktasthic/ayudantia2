const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./database/connection");
const User = require("./models/User");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);

    // Paths
    this.paths = {
      users: "/api/users",
    };

    // Connect to the database
    this.database();

    // Json
    this.app.use(express.json());

    // Middlewares
    this.middlewares();

    // Application routes
    this.routes();
  }

  async database() {
    try {
      // Entities
      await db.authenticate();
      await User.sync({ force: false });

      console.log("Database synchronized successfully.");
    } catch (error) {
      console.error("Error synchronizing the database:", error);
    }
  }

  middlewares() {
    // Morgan
    this.app.use(morgan("dev"));

    // Read and parse body
    this.app.use(express.json());

    // CORS
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.paths.users, require("./routes/userRoutes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;

