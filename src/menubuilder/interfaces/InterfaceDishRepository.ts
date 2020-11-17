import {Dish} from "../entities/Dish";

export interface InterfaceDishRepository
{
    getRandomByCategory(category: string): Dish;
}
