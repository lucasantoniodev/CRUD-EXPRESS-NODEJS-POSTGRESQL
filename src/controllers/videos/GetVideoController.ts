import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { GetVideoService } from "../../services/videos/GetlVideoService";

class GetVideoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new GetVideoService();
        const result = await service.execute({ id }, AppDataSource)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        response.status(200).json(result);

    }

}

export const getVideoController = new GetVideoController()