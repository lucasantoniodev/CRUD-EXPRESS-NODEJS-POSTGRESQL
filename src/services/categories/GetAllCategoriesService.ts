import { Category } from "../../entities/Category";
import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { CategoryRepository } from "../../repositories/Category_repository";



export class GetAllCategoriesService {
    async execute(database: DatabaseInterface): Promise<Category[] | Error> {
        try {
            const repository = new CategoryRepository(database)
            const categories = repository.findAll()
            return categories;

        } catch (error) {
            return new Error(error)
        }

    }
}
