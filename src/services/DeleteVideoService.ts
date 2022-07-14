import { Video } from "../entities/Video";
import { IDataSource } from "../interfaces/DataSource_interface";

export class DeleteVideoService {
    async execute(id: string, dataSource: IDataSource) {
        try {
            const repository = dataSource.getRepository(Video)

            if (!await repository.findOneBy({ id: id })) {
                return new Error("Video does not exists!")
            }

            await repository.delete({ id: id })
  
        } catch (error) {
            return new Error(error)
        }
    }
}
