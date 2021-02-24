import "reflect-metadata";
import {createConnection} from "typeorm";
import {ORMDish} from "../menubuilder/external/entities/ORMDish";

export async function initializeDB(): Promise<void> {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "menubuilder",
        password: "menubuilder",
        database: "menubuilder",
        entities: [ORMDish],
    });
}

// https://www.velotio.com/engineering-blog/set-up-production-ready-rest-nodejs-api-server-using-typescript-express-postgresql
// https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application
