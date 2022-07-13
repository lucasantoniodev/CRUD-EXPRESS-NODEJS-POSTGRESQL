import { Category } from "../entities/Category";
import { IDataSource } from "../interfaces/DataSource_interface";


export class GetAllCategoriesService {
    async execute(dataSource: IDataSource): Promise<Category[] | Error> {
        try {
            const repo = dataSource.manager.getRepository(Category)
            const categories = repo.find()
            return categories;

        } catch (error) {
            return new Error(error)
        }

    }
}
