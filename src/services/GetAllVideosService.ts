import { Video } from "../entities/Video";
import { IDataSource } from "../interfaces/DataSource_interface";

export class GetAllVideosServices {
    async execute(dataSource: IDataSource): Promise<Video[] | Error> {
        try {

            const repository = dataSource.getRepository(Video);
            const videos = await repository.find({ relations: ["category"] });
            return videos;

        } catch (error) {
            return new Error(error)
        }
    }

}