import {getConnection} from "typeorm";
import {Menu} from "../entities/Menu";
import {IMenuRepository} from "../interfaces/IMenuRepository";
import {WeekCalculator} from "../services/WeekCalculator";
import {DishesMenus} from "./entities/DishesMenus";
import {Menus} from "./entities/Menus";
import {PgDishRepository} from "./PgDishRepository";

export class PgMenuRepository implements IMenuRepository
{
    private weekCalculator;
    private dishRepository;

    public constructor() {
        this.weekCalculator = new WeekCalculator();
        this.dishRepository = new PgDishRepository();
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

    public async getByWeekNumber(weekNumber: number): Promise<Menu>
    {
        const dbMenu = await getConnection().getRepository(Menus)
            .createQueryBuilder("menu")
            .where("menu.weeknumber = :weekNumber", {weekNumber} )
            .getOne();
        if (!dbMenu) {
            return null;
        }
        const menuId = dbMenu.id;
        const menu = this.ormToEntity(dbMenu);

        const dishesMenus = await getConnection().getRepository(DishesMenus)
            .createQueryBuilder("dishesmenus")
            .where("dishesmenus.menuid = :menuId", {menuId})
            .getMany();

        await Promise.all(dishesMenus.map( async (dishmenu) => {
            const dish = await this.dishRepository.getById(dishmenu.dishid);
            menu.addDish(dish, dishmenu.menuslot);
        }));

        return menu;
    }

    private ormToEntity(dbMenu: Menus): Menu
    {
        const menu = new Menu();
        menu.setWeekNumber(dbMenu.weeknumber);
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
