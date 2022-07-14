import { Router } from "express";
import { CategoryController } from "../controllers/CreateCategoryController";
import { deleteCategoryController } from "../controllers/DeleteCategoryController";
import { getAllCategoriesController } from "../controllers/GetAllCategoriesController";

const routes = Router();

routes.get("/categories", getAllCategoriesController.handle);

routes.post("/categories", CategoryController.handle);

routes.delete("/category/:id", deleteCategoryController.handle);

export { routes }