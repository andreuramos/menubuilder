import {Dish} from "../entities/Dish";
import {Menu} from "../entities/Menu";
import {PgDishRepository} from "../external/PgDishRepository";
import {IDishRepository} from "../interfaces/IDishRepository";
import {MenuFactory} from "./MenuFactory";

describe("Menu Factory", () => {
    it ("Returns a menu", () => {
        const dishRepository: IDishRepository = {
            getRandomByCategory(category: string): Dish {
                return new Dish("dish_name", category);
            },
        };
        const factory = new MenuFactory(dishRepository);

        const menu = factory.execute();

        expect(menu).toBeInstanceOf(Menu);
    });

    it ("Contains Dishes", () => {
        const dishRepository: IDishRepository = {
            getRandomByCategory(category: string): Dish {
                return new Dish("dish_name", category);
            },
        };
        const factory = new MenuFactory(dishRepository);

        const menu = factory.execute();

        expect(menu.dishes().monday).toBeInstanceOf(Dish);
    });
});
