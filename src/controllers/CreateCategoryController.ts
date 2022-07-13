import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        console.log(request.body)
        const { name, description } = request.body;

        const service = new CreateCategoryService();

        const result = await service.execute({ name, description })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result)
    }
}

export const CategoryController = new CreateCategoryController()