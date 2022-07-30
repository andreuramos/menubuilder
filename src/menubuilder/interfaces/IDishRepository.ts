import {Dish} from "../entities/Dish";

export interface IDishRepository
{
    getById(id: number): Promise<Dish>;
    getRandomByCategory(category: string): Promise<Dish>;
    add(data: object): Promise<void>;
    getAll(): Promise<Dish[]>;
}
