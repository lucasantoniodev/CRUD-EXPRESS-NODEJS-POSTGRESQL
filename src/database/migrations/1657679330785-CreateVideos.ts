import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateVideos1657679330785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "videos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "category_id",
                        type: "uuid"
                    },
                    {
                        name: "duration",
                        type: "numeric"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_videos_category",
                        columnNames: ["category_id"], // QUAL É A COLUNA DENTRO DA TABELA QUE ESTÁ CRIANDO
                        referencedTableName: "categories", // NOME DA TABELA NA QUAL VAI FAZER O RELACIONAMENTO
                        referencedColumnNames: ["id"] // NOME DA COLUNA QUE VAI SER A REFERÊNCIA
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos");
    }

}
