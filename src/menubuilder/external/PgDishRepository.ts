import {Dish} from "../entities/Dish";
import {IDishRepository} from "../interfaces/IDishRepository";

export class PgDishRepository implements IDishRepository
{
    public getRandomByCategory(category: string): Dish {
        return new Dish("Test", category);
    }
}
