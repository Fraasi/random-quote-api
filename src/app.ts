import express from "express";
import cors from "cors";
import helmet from "helmet";
// import { connect, set } from "mongoose";
import { NODE_ENV, PORT } from "@config";
// import { dbConnection } from "@databases";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Routes } from "@interfaces/routes.interface";
import errorMiddleware from "./middlewares/error.middleware";
import * as pgk from "../package.json";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 3000;

    // this.connectToDatabase();
    this.initializeSwagger();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`=================================`);
      console.info(`======= ENV: ${this.env} =======`);
      console.info(`App listening on http://localhost:${this.port}`);
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

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: "rq-api",
          version: pgk.version,
          description: "random quote api",
          contact: {
            name: "API Support",
            url: pgk.bugs.url,
          },
        },
      },
      apis: ["swagger.yaml"],
    };

    const specs = swaggerJSDoc(options);
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: "*", credentials: false }));
    this.app.use(
      helmet({
        crossOriginResourcePolicy: {
          policy: "cross-origin",
        },
      })
    );
    this.app.use(errorMiddleware);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }
}

export default App;
