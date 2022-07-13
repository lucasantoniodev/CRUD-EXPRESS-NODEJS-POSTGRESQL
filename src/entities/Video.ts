import { Entity, Column, PrimaryColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"
import { Category } from "./Category";

@Entity("videos")
export class Video {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    //Relação de Vários -> UM (1 Categoria contem vários vídeos, ou seja, os vídeos só podem ter uma categoria)
    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}