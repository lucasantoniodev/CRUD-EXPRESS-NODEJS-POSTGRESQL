
import { Video } from "../entities/Video"
import { DatabaseInterface } from "../interfaces/database/Database_interface"
import { VideoRepositoryInterface } from "../interfaces/repositories/Video_repository_interface"

export class VideoRepository implements VideoRepositoryInterface {

    private database: DatabaseInterface

    constructor(database: DatabaseInterface) {
        this.database = database
    }

    private get repository() {
        return this.database.getRepository(Video)
    }

    async create(name: string, description: string, duration: number, category_id: string): Promise<Video> {
        const videoCreated = this.repository.create({ name, description, duration, category_id })
        await this.repository.save(videoCreated)
        return videoCreated
    }

    async save(video: Video): Promise<Video> {
        const videoCreated = await this.repository.save(video)
        return videoCreated
    }

    async findAll(): Promise<Video[]> {
        const categories = this.repository.find({ relations: ["category"] })
        return categories
    }

    async find({ id, name, description, duration, category_id }: { id?: string, name?: string, description?: string, duration?: number, category_id?: string }): Promise<Video> {
        const video = this.repository.findOneBy({ id, name, description, duration, category_id })
        return video
    }

    async delete(id: string) {
        const videoDeleted = await this.repository.delete({ id: id })
        return videoDeleted
    }
}