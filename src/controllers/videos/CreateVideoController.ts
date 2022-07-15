import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { CreateVideoService } from "../../services/videos/CreateVideoService";

class CreateVideoController {
    async handle(request: Request, response: Response) {
        const { name, description, duration, category_id } = request.body
        const service = new CreateVideoService()

        const result = await service.execute({ name, description, duration, category_id }, AppDataSource)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.status(200).json(result)
    }

}

export const createVideoController = new CreateVideoController()