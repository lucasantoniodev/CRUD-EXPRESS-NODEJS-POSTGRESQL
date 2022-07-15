import { DatabaseInterface } from "../../interfaces/database/Database_interface";
import { CategoryRepository } from "../../repositories/Category_repository";



export class DeleteCategoryService {
    async execute(id: string, database: DatabaseInterface) {
        try {
            const repository = new CategoryRepository(database)

            if (!await repository.find({ id: id })) {
                return new Error("Category does not exists!")
            }
            
            await repository.delete(id)
        } catch (error) {
            return new Error(error)
        }
    }
}