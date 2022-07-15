import { Video } from "../../entities/Video"

export interface VideoRepositoryInterface {
    create(name: string, description: string, duration: number, category_id: string): Promise<Video>
    save(video: Video): Promise<Video>
    findAll(): Promise<Video[]>
    find(params: {}): Promise<Video>
    delete(id: string): void
}