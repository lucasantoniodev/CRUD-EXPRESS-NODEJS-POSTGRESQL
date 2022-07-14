import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { DeleteVideoService } from "../services/DeleteVideoService";

class DeleteVideoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const service = new DeleteVideoService()
        
        const result = await service.execute(id, AppDataSource)
        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        response.status(204).end();
    }
}

export const deleteVideoController = new DeleteVideoController()