import { Router, Request, Response, NextFunction } from "express";
import { Routes } from "@interfaces/routes.interface";

class HelpRoute implements Routes {
  public path = "/help";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private controller(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).send(`
        / - random quote<br>
        /all - get all quotes<br>
        /authors - get all authors<br>
        /authors/abc - search/get all quotes by abc<br>
        /help - this endpoint help<br>
      `);
    } catch (error) {
      next(error);
    }
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller);
  }
}

export default HelpRoute;
