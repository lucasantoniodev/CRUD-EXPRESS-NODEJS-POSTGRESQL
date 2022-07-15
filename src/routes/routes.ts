import { Router } from "express";
import { createCategoryController } from "../controllers/categories/CreateCategoryController";
import { createVideoController } from "../controllers/videos/CreateVideoController";
import { deleteCategoryController } from "../controllers/categories/DeleteCategoryController";
import { deleteVideoController } from "../controllers/videos/DeleteVideoController";
import { getAllCategoriesController } from "../controllers/categories/GetAllCategoriesController";
import { getAllVideosController } from "../controllers/videos/GetAllVideosController";
import { updateCategoryController } from "../controllers/categories/UpdateCategoryController";
import { updateVideoController } from "../controllers/videos/UpdateVideoController";

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
routes.get("/videos", getAllVideosController.handle);
routes.put("/video/:id", updateVideoController.handle);
routes.delete("/video/:id", deleteVideoController.handle);

export { routes }