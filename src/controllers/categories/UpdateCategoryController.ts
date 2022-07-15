import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { UpdateCategoryService } from "../services/categories/UpdateCategoryService";

class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const { name, description } = request.body

        const service = new UpdateCategoryService()
        const result = await service.execute(
            { id: id, name: name, description: description }, AppDataSource)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result).status(204);

    }

}

export const updateCategoryController = new UpdateCategoryController()