import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMenuTable1614716340684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE IF NOT EXISTS menus (" +
            "id SERIAL PRIMARY KEY," +
            "weekNumber INT," +
            "createdAt TIMESTAMP," +
            "updatedAt TIMESTAMP" +
            ");");

        await queryRunner.query("CREATE TABLE IF NOT EXISTS dishes_menus (" +
            "menuId INT," +
            "dishId INT," +
            "menuSlot VARCHAR(50)" +
            ");");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE IF EXISTS dishes_menus;");
        await queryRunner.query("DROP TABLE IF EXISTS menus;");
    }

}
