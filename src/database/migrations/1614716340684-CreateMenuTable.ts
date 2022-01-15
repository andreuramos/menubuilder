import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMenuTable1614716340684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE IF NOT EXISTS menus (" +
            "id SERIAL PRIMARY KEY," +
            "week_number INT," +
            "created_at TIMESTAMP," +
            "updated_at TIMESTAMP" +
            ");");

        await queryRunner.query("CREATE TABLE IF NOT EXISTS dishes_menus (" +
            "menu_id INT," +
            "dish_id INT," +
            "menu_slot VARCHAR(50)" +
            ");");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE IF EXISTS dishes_menus;");
        await queryRunner.query("DROP TABLE IF EXISTS dishes_menus;");
    }

}
