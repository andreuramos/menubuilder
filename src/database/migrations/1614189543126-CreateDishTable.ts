import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDishTable1614189543126 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE IF NOT EXISTS dishes (" +
            "id SERIAL PRIMARY KEY," +
            "name varchar(100)," +
            "category varchar(25)" +
            ");");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE IF EXISTS dishes;");
    }

}
