import {Dish} from "../entities/Dish";
import {InterfaceDishRepository} from "../interfaces/InterfaceDishRepository";

export class PostgresDishRepository implements InterfaceDishRepository
{
    public getRandomByCategory(category: string): Dish {
        return new Dish("Test", category);
    }
}
