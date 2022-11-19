import { Router, Request, Response, NextFunction } from "express";
import { Routes } from "@interfaces/routes.interface";
import { searchQuotes } from "../databases/mockDB";

class SearchRoute implements Routes {
  public path = "/search";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private controller = (req: Request, res: Response, next: NextFunction) => {
    try {
      const searchResult = searchQuotes(req.params.searchTerm);
      res.status(200).json(searchResult);
    } catch (error) {
      next(error);
    }
  };

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller);
    this.router.get(`${this.path}/:searchTerm`, this.controller);
  }
}

export default SearchRoute;
