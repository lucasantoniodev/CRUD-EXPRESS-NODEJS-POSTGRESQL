import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { VideoRepository } from "../../repositories/Video_repository";


type GetRequest = {
    id: string
}

export class GetVideoService {
    async execute({ id }: GetRequest, database: DatabaseInterface) {
        try {
            const repository = new VideoRepository(database)
            
            const video = await repository.find({ id })

            if (!video) {
                return new Error("Video does not exists!")
            }

            return video
        } catch (error) {
            return new Error(error)
        }
    }

}