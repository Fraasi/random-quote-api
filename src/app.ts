import express from "express";
import helmet from "helmet";
// import { connect, set } from "mongoose";
import { NODE_ENV, PORT, ORIGIN, CREDENTIALS } from "@config";
// import { dbConnection } from "@databases";
import { Routes } from "@interfaces/routes.interface";
import errorMiddleware from "./middlewares/error.middleware";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 3000;

    // this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`=================================`);
      console.info(`======= ENV: ${this.env} =======`);
      console.info(`App listening on the port ${this.port}`);
      console.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  // private connectToDatabase() {
  //   if (this.env !== "production") {
  //     set("debug", true);
  //   }

  //   connect(dbConnection.url, dbConnection.options);
  // }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(errorMiddleware);
    // this.app.use(express.json());
    // this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }
}

export default App;
