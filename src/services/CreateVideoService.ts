import { Category } from "../entities/Category";
import { Video } from "../entities/Video";
import { IDataSource } from "../interfaces/DataSource_interface";

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
        category_id }: VideoRequest, dataSource: IDataSource) {

        try {
            const repositoryCategory = dataSource.getRepository(Category)

            if (!await repositoryCategory.findOneBy({ id: category_id })) {
                return new Error("Category does not exists!")
            }

            const repositoryVideo = dataSource.getRepository(Video)
            
            if (await repositoryVideo.findOneBy({ name: name })) {
                return new Error("Video already exists!")
            }

            const video = repositoryVideo.create({ name, description, duration, category_id })
            await dataSource.manager.save(video)

            return video
        } catch (error) {
            return new Error(error)
        }
    }
}