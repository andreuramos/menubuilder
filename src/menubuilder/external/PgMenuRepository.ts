import {getConnection} from "typeorm";
import {Menu} from "../entities/Menu";
import {IMenuRepository} from "../interfaces/IMenuRepository";

export class PgMenuRepository implements IMenuRepository
{
    public save(menu: Menu): void {

        const today_week = new Date().format('"')

        getConnection().getRepository(Menus)
            .insert()
    }

}
