import {Dish} from "../entities/Dish";
import {Menu} from "../entities/Menu";
import {IDishRepository} from "../interfaces/IDishRepository";
import {MenuFactory} from "./MenuFactory";

describe("Menu Factory", () => {
    it ("Returns a menu", () => {
        const dishRepository: IDishRepository = {
            async getRandomByCategory(category: string): Promise<Dish> {
                return new Dish(1, "dish_name", category);
            },
        };
        const factory = new MenuFactory(dishRepository);

        factory.execute().then( (menu) => {
            expect(menu).toBeInstanceOf(Menu);
        });
    });

    it ("Contains Dishes", () => {
        const dishRepository: IDishRepository = {
            async getRandomByCategory(category: string): Promise<Dish> {
                return new Dish(2, "dish_name", category);
            },
        };
        const factory = new MenuFactory(dishRepository);

        factory.execute().then( (menu) => {
            expect(menu.dishes().monday).toBeInstanceOf(Dish);
        });
    });
});
