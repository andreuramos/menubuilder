import {getConnection} from "typeorm";
import {Menu} from "../entities/Menu";
import {IMenuRepository} from "../interfaces/IMenuRepository";
import {WeekCalculator} from "../services/WeekCalculator";
import {DishesMenus} from "./entities/DishesMenus";
import {Menus} from "./entities/Menus";

export class PgMenuRepository implements IMenuRepository
{
    private weekCalculator;

    public constructor() {
        this.weekCalculator = new WeekCalculator();
    }
    public async save(menu: Menu) {
        const timestamp = new Date();
        const dbMenu = {
            weeknumber: menu.getWeekNumber(),
            createdat: timestamp,
            updatedat: timestamp,
        };
        const insertResult = await getConnection()
            .getRepository(Menus)
            .insert(dbMenu);

        await this.linkDishes(insertResult.identifiers[0].id, menu.dishes());
    }

    private ormToEntity(dbMenu: Menus): Menu
    {
        const menu = new Menu();
        menu.setWeekNumber(this.weekCalculator.execute(new Date(dbMenu.createdat)));

        return menu;
    }

    private async linkDishes(menuId: number, dishes: object)
    {
        for (const slot of Object.keys(dishes)) {
            const dishMenu = {
                menuid: menuId,
                dishid: dishes[slot].id,
                menuslot: slot,
            };
            await getConnection().getRepository(DishesMenus)
                .insert(dishMenu);
        }
    }
}
