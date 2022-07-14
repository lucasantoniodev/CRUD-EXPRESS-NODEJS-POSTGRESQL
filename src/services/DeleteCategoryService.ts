import { Category } from "../entities/Category";
import { IDataSource } from "../interfaces/DataSource_interface";


export class DeleteCategoryService {
    async execute(id: string, dataSource: IDataSource) {
        try {
            const repo = dataSource.getRepository(Category)

            if (!await repo.findOneBy({ id: id })) {
                return new Error("Category does not exists!")
            }
            
            await repo.delete({ id: id })
           
        } catch (error) {
            return new Error(error)
        }
    }
}