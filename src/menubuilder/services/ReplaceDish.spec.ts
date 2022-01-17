import {Dish} from "../entities/Dish";
import {Menu} from "../entities/Menu";
import {PgDishRepository} from "../external/PgDishRepository";
import {PgMenuRepository} from "../external/PgMenuRepository";
import {IDishRepository} from "../interfaces/IDishRepository";
import {IMenuRepository} from "../interfaces/IMenuRepository";
import {ReplaceDish} from "./ReplaceDish";

describe("Replace Dish Service", () => {

    it("is instantiable", () => {
        const service = new ReplaceDish(new PgDishRepository(), new PgMenuRepository());

        expect(service instanceof ReplaceDish).toBeTruthy();
    });

    it("replaces a dish at slot from a given menu", async () => {
        let menu = new Menu();
        const oldDish = new Dish(1, "old_dish", "cat");
        menu.addDish(oldDish, "monday");
        const newDish = new Dish(2, "new_dish", "cat");

        const dishRepo: IDishRepository = {
            async getRandomByCategory(category: string): Promise<Dish> {
                return newDish;
            },
            async add(data: object): Promise<void> {return null;},
            async getById(data: number): Promise<Dish> {return null;},
        };
        const menuRepo: IMenuRepository = {
            delete(menu: Menu): void { return; },
            async getByWeekNumber(week: number): Promise<Menu> { return null; },
            async save(menu: Menu): Promise<void> { return; },
        };
        const service = new ReplaceDish(dishRepo, menuRepo);

        menu = await service.execute(menu, "monday");

        expect(menu.dishes().monday).toBe(newDish);
    });
});
