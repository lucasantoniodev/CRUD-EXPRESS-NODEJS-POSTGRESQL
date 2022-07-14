import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { UpdateVideoService } from "../services/UpdateVideoService";

class UpdateVideoController {
    async handle(request: Request, response: Response) {
        const { id, name, description, duration, category_id } = request.body

        const service = new UpdateVideoService()
        const result = await service.execute({ id, name, description, duration, category_id }, AppDataSource)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(result).status(204);

    }
}

export const updateVideoController = new UpdateVideoController()