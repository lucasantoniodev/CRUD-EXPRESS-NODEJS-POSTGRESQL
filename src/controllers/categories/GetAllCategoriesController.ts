import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { GetAllCategoriesService } from "../../services/categories/GetAllCategoriesService";

class GetAllCategoriesController {
    async handle(request: Request, response: Response) {

        const service = new GetAllCategoriesService();
        const result = await service.execute(AppDataSource);
        
        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result).status(200);

    }
}

export const getAllCategoriesController = new GetAllCategoriesController()