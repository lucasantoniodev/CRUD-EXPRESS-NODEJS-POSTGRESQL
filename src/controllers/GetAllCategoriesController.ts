import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";


class GetAllCategoriesController {
    async handle(request: Request, response: Response) {

        const service = new GetAllCategoriesService();
        const categories = await service.execute(AppDataSource);
        return response.json(categories);

    }
}

export const getAllCategoriesController = new GetAllCategoriesController()