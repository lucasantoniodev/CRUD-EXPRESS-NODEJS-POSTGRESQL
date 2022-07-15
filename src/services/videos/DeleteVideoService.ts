import { DatabaseInterface } from "../../interfaces/database/Database_interface"
import { VideoRepository } from "../../repositories/Video_repository"


export class DeleteVideoService {
    async execute(id: string, database: DatabaseInterface) {
        try {
            const repository = new VideoRepository(database)

            if (!await repository.find({ id: id })) {
                return new Error("Video does not exists!")
            }

            await repository.delete(id)
        } catch (error) {
            return new Error(error)
        }
    }
}
