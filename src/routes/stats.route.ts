import { Router, Request, Response, NextFunction } from "express";
import { Routes } from "@interfaces/routes.interface";
import { getStats } from "../databases/mockDB";

class StatsRoute implements Routes {
  public path = "/stats";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private controller(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = getStats();
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller);
  }
}

export default StatsRoute;
