import { Category } from "../../entities/Category";
import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { CategoryRepository } from "../../repositories/Category_repository";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({
        name,
        description
    }: CategoryRequest, database: DatabaseInterface): Promise<Category | Error> {

        const repository = new CategoryRepository(database);

        if (await repository.find({ name: name })) {
            return new Error("Category already exists!");
        }


        try {
            const category = await repository.create(name, description);
            const categoryStored = await repository.save(category);
            return categoryStored
        } catch (error) {
            return new Error(error);
        }

    }
}
