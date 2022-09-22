import { Router, Request, Response, NextFunction } from "express";
import { Routes } from "@interfaces/routes.interface";
import { getAuthors } from "../databases/mockDB";

class AuthorsRoute implements Routes {
  public path = "/authors";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private controller = (req: Request, res: Response, next: NextFunction) => {
    try {
      const authors = getAuthors(req.params.author);
      res.status(200).json(authors);
    } catch (error) {
      next(error);
    }
  };

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller);
    this.router.get(`${this.path}/:author`, this.controller);
  }
}

export default AuthorsRoute;
