import { Router, Request, Response, NextFunction } from "express";
import { Routes } from "@interfaces/routes.interface";
import { getAllQuotes } from "../databases/mock";

class AllRoute implements Routes {
  public path = "/all";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private controller = (req: Request, res: Response, next: NextFunction) => {
    try {
      const allQuotes = getAllQuotes();
      res.status(200).json(allQuotes);
    } catch (error) {
      next(error);
    }
  };
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller);
  }
}

export default AllRoute;
