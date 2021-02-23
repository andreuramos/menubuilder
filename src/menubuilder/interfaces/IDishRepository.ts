import {Dish} from "../entities/Dish";

export interface IDishRepository
{
    getRandomByCategory(category: string): Dish;
}
