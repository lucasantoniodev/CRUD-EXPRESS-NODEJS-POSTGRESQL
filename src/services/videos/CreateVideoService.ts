import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { CategoryRepository } from "../../repositories/Category_repository";
import { VideoRepository } from "../../repositories/Video_repository";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {
    async execute({ name,
        description,
        duration,
        category_id }: VideoRequest, database: DatabaseInterface) {

        try {
            const categoryRepository = new CategoryRepository(database)

            if (!await categoryRepository.find({ id: category_id })) {
                return new Error("Category does not exists!")
            }

            const videoRepository = new VideoRepository(database)

            if (await videoRepository.find({ name: name })) {
                return new Error("Video already exists!")
            }

            const video = await videoRepository.create(name, description, duration, category_id)
            const videoStored = await videoRepository.save(video)
            return videoStored
        } catch (error) {
            return new Error(error)
        }
    }
}