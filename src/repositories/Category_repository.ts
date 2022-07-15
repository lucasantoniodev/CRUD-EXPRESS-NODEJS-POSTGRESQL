import { Category } from "../entities/Category"
import { DatabaseInterface } from "../interfaces/database/Database_interface"
import { CategoryRepositoryInterface } from "../interfaces/repositories/Category_repository_interface"

export class CategoryRepository implements CategoryRepositoryInterface {

    private database: DatabaseInterface

    constructor(database: DatabaseInterface) {
        this.database = database
    }

    private get repository() {
        return this.database.getRepository(Category)
    }

    async create(name: string, description: string): Promise<Category> {
        const categoryCreated = this.repository.create({ name, description })
        await this.repository.save(categoryCreated)
        return categoryCreated
    }

    async save(category: Category): Promise<Category> {
        const categoryCreated = await this.repository.save(category)
        return categoryCreated
    }

    async findAll(): Promise<Category[]> {
        const categories = this.repository.find()
        return categories
    }

    async find({
        id,
        name
    }: { id?: string, name?: string }): Promise<Category> {
        const category = this.repository.findOneBy({ id, name })
        return category
    }

    async delete(id: string) {
        const categoryDeleted = await this.repository.delete({ id: id })
        return categoryDeleted
    }
}