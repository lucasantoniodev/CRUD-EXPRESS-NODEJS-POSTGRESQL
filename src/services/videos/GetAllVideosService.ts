import { Video } from "../../entities/Video";
import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { VideoRepository } from "../../repositories/Video_repository";


export class GetAllVideosServices {
    async execute(database: DatabaseInterface): Promise<Video[] | Error> {
        try {

            const repository = new VideoRepository(database)
            const videos = await repository.findAll();
            return videos;

        } catch (error) {
            return new Error(error)
        }
    }
}


