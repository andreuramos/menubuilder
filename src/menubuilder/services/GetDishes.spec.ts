import {Dish} from "../entities/Dish";
import {IDishRepository} from "../interfaces/IDishRepository";
import {GetDishes} from "./GetDishes";

describe("Get Dishes", () => {
    it("Returns a list of dishes", async () => {
        const dishRepo: IDishRepository = {
            add(data: object): Promise<void> {
                return Promise.resolve(undefined);
            }, getAll(): Promise<Dish[]> {
                return Promise.resolve([
                    new Dish(1, "name", "cat"),
                ]);
            }, getById(id: number): Promise<Dish> {
                return Promise.resolve(undefined);
            }, getRandomByCategory(category: string): Promise<Dish> {
                return Promise.resolve(undefined);
            },
        };

        const service = new GetDishes(dishRepo);

        const response = await service.execute();

        expect(response).toBeInstanceOf(Array);
        expect(response[0]).toBeInstanceOf(Dish);
    });
});
