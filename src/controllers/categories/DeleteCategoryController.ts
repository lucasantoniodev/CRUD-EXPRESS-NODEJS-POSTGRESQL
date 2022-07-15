import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { DeleteCategoryService } from "../../services/categories/DeleteCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new DeleteCategoryService()
        const result = await service.execute(id, AppDataSource)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end();

    }
}

export const deleteCategoryController = new DeleteCategoryController()