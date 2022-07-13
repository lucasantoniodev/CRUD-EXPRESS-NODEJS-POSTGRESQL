import { Category } from "../entities/Category";
import { IDataSource } from "../interfaces/DataSource_interface";

type CategoryRequest = {
    name: string;
    description: string;
}


export class CreateCategoryService {
    async execute({
        name,
        description
    }: CategoryRequest, dataSource: IDataSource): Promise<Category | Error> {

            const repo = dataSource.getRepository(Category)

            if (await repo.findOneBy({ name: name })) {
                return new Error("Category already exists!")
            }

            try {
                const category = repo.create({ name, description })
                await dataSource.manager.save(category)
                return category
            } catch (error) {
                return new Error(error)
            }
        
    }
}
