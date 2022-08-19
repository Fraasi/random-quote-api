import { Router, Request, Response, NextFunction } from "express";
import { Routes } from "@interfaces/routes.interface";

class IndexRoute implements Routes {
  public path = "/";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private controller = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "message" });
    } catch (error) {
      next(error);
    }
  };
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller);
  }
}

export default IndexRoute;
