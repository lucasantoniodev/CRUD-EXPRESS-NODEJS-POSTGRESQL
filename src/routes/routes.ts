import { Router } from "express";
import { CategoryController } from "../controllers/CreateCategoryController";
import { deleteCategoryController } from "../controllers/DeleteCategoryController";
import { getAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { updateCategoryController } from "../controllers/UpdateCategoryController";

const routes = Router();
/**
 * [X] C - CREATE
 * [X] R - READ
 * [X] U - UPDATE
 * [X] D - DELETE
 */


routes.post("/categories", CategoryController.handle);
routes.get("/categories", getAllCategoriesController.handle);
routes.put("/category/:id", updateCategoryController.handle);
routes.delete("/category/:id", deleteCategoryController.handle);

export { routes }