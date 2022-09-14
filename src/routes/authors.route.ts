import { Router, Request, Response, NextFunction } from "express";
import { Routes } from "@interfaces/routes.interface";
import { getAuthors } from "../databases/mock";

class AuthorsRoute implements Routes {
  public path = "/authors";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private controller = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.authors) {
        const authors = getAuthors(req.params.authors);
        res.status(200).json(authors);
      }
      const authors = getAuthors();
      res.status(200).json(authors);
    } catch (error) {
      next(error);
    }
  };

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller);
    this.router.get(`${this.path}/:authors`, this.controller);
  }
}

export default AuthorsRoute;
