import { DataSource } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Category } from "../entities/Category";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({
        name,
        description
    }: CategoryRequest): Promise<Category | Error | any> {   
        
        const repo = AppDataSource.getRepository(Category)

        if (await repo.findOneBy({ name: name })) {
            return new Error("Category already exists!")
        }

        try {
            const category = repo.create({ name, description })
            await AppDataSource.manager.save(category)
            return category
        } catch (error) {
            return new Error(error)
        }
    }
}

  // const categoria = new Category()
        // categoria.name = name
        // categoria.description = description
        // // AppDataSource.manager.create(categoria)
        // return await AppDataSource.manager.save(categoria)

// const user = new User()
    // user.firstName = "Daniel"
    // user.lastName = "Craig"
    // user.age = 50
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)