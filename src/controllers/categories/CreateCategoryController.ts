import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { CreateCategoryService } from "../../services/categories/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const service = new CreateCategoryService();
        const result = await service.execute({ name, description }, AppDataSource)
        
        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
       
        return response.json(result)
    }
}

export const createCategoryController = new CreateCategoryController()