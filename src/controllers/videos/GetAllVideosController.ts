import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { GetAllVideosServices } from "../../services/videos/GetAllVideosService";


class GetAllVideosController {
    async handle(request: Request, response: Response) {


        const service = new GetAllVideosServices()
        const result = await service.execute(AppDataSource)


        return response.json(result)
    }
}

export const getAllVideosController = new GetAllVideosController()