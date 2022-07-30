import {Dish} from "../entities/Dish";
import {Menu} from "../entities/Menu";
import {IDishRepository} from "../interfaces/IDishRepository";
import {MenuFactory} from "./MenuFactory";
import {WeekCalculator} from "./WeekCalculator";

describe("Menu Factory", () => {
    it ("Returns a menu", () => {
        const dishRepository: IDishRepository = {
            async getRandomByCategory(category: string): Promise<Dish> {
                return new Dish(1, "dish_name", category);
            },
            async add(data: object): Promise<void> {
                return null;
            },
            async getById(id: number): Promise<Dish> {
                return new Dish(1, "name", "category");
            },
            async getAll(): Promise<Dish[]> {
                return [new Dish(1, "name", "category")];
            },
        };
        const factory = new MenuFactory(dishRepository, new WeekCalculator());

        factory.execute().then( (menu) => {
            expect(menu).toBeInstanceOf(Menu);
        });
    });

    it ("Contains Dishes", () => {
        const dishRepository: IDishRepository = {
            async getRandomByCategory(category: string): Promise<Dish> {
                return new Dish(2, "dish_name", category);
            },
            async add(data: object): Promise<void> {
                return null;
            },
            async getById(id: number): Promise<Dish> {
                return new Dish(1, "name", "category");
            },
            async getAll(): Promise<Dish[]> {
                return [new Dish(1, "name", "category")];
            },
        };
        const factory = new MenuFactory(dishRepository, new WeekCalculator());

        factory.execute().then( (menu) => {
            expect(menu.dishes().monday).toBeInstanceOf(Dish);
        });
    });
});
