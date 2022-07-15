import { Category } from "../../entities/Category"
import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { CategoryRepository } from "../../repositories/Category_repository";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUpdateRequest, database: DatabaseInterface) {
        try {
            const repository = new CategoryRepository(database)

            const category = await repository.find({ id: id });

            if (!category) {
                return new Error("Category does not exists!")
            }

            category.name = name ? name : category.name;
            category.description = description ? description : category.name

            await repository.save(category)

            return category

        } catch (error) {
            return new Error(error)
        }
    }
}