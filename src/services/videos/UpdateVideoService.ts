import { Video } from "../../entities/Video";
import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { CategoryRepository } from "../../repositories/Category_repository";
import { VideoRepository } from "../../repositories/Video_repository";

type UpdateRequest = {
    id: string
    name: string,
    description: string,
    duration: number,
    category_id: string,
}

export class UpdateVideoService {
    async execute({ id, name, description, duration, category_id }: UpdateRequest, database: DatabaseInterface): Promise<Video | Error> {
        try {

            const repository = new VideoRepository(database)

            const video = await repository.find({ id: id })
            if (!video) {
                return new Error("Video does not exists!")
            }

            if (category_id) {
                const categoryRepository = new CategoryRepository(database)
                const category = await categoryRepository.find({ id: category_id })

                if (!category) {
                    return new Error("Category does not exists!")
                }     
            }

            video.name = name ? name : video.name
            video.description = description ? description : video.description
            video.duration = duration ? duration : video.duration
            video.category_id = category_id ? category_id : video.category_id
            

            const videoUpdated = repository.save(video)
            return videoUpdated

        } catch (error) {
            return new Error(error)
        }

    }
}