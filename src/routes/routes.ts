import { Request, response, Router } from "express";
import { CategoryController } from "../controllers/CreateCategoryController";

const routes = Router();

routes.get("/", (request: Request, response) => {
    console.log(request.body)
    return response.send("Welcome!")
});

routes.post("/categories", CategoryController.handle)

export { routes }