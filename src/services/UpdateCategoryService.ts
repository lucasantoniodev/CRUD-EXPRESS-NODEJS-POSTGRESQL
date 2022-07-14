import { Category } from "../entities/Category"
import { IDataSource } from "../interfaces/DataSource_interface"

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUpdateRequest, dataSource: IDataSource) {
        try {
            const repo = dataSource.getRepository(Category)
            const category = await repo.findOneBy({ id: id });

            if (!category) {
                return new Error("Category does not exists!")
            }

            category.name = name ? name : category.name;
            category.description = description ? description : category.name

            await repo.save(category)

            return category

        } catch (error) {
            return new Error(error)
        }
    }
}