import { Category } from "../../entities/Category";


export interface CategoryRepositoryInterface {
    create(name: string, description: string): Promise<Category>
    save(category: Category): Promise<Category>
    findAll(): Promise<Category[]>
    find(params: {}): Promise<Category>
    delete(id: string): void
}