import { Router } from "express";
import { createCategoryController } from "../controllers/CreateCategoryController";
import { createVideoController } from "../controllers/CreateVideoController";
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

// Rotas referente as categorias.
routes.post("/categories", createCategoryController.handle);
routes.get("/categories", getAllCategoriesController.handle);
routes.put("/category/:id", updateCategoryController.handle);
routes.delete("/category/:id", deleteCategoryController.handle);

// Rotas referente aos vídeos.
routes.post("/videos", createVideoController.handle);

export { routes }