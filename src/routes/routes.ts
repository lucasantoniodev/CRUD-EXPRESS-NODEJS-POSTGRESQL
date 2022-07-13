import { Router } from "express";
import { CategoryController } from "../controllers/CreateCategoryController";
import { getAllCategoriesController } from "../controllers/GetAllCategoriesController";

const routes = Router();

routes.get("/categories", getAllCategoriesController.handle);

routes.post("/categories", CategoryController.handle);

export { routes }