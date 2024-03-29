import { DataSource } from "typeorm";
import 'dotenv/config'


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: [process.env.TYPEORM_MIGRATIONS],
    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: true,
    logging: false
});

AppDataSource.initialize().then(() => {

    console.log("Running database...")

}).catch(error => console.log(error))
