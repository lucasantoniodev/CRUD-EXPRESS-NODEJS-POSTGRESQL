import { Video } from "../entities/Video";
import { IDataSource } from "../interfaces/DataSource_interface";

type UpdateRequest = {
    id: string
    name: string,
    description: string,
    duration: number,
    category_id: string,
}

export class UpdateVideoService {
    async execute({ id, name, description, duration, category_id }: UpdateRequest, dataSource: IDataSource): Promise<Video | Error> {
        try {
            const repository = dataSource.getRepository(Video)

            const video = await repository.findOneBy({ id: id })
            if (!video) {
                return new Error("Video does not exists!")
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