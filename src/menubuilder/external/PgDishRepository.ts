import {getConnection} from "typeorm";
import {Dish} from "../entities/Dish";
import {IDishRepository} from "../interfaces/IDishRepository";
import {Dishes} from "./entities/Dishes";

export class PgDishRepository implements IDishRepository
{
    private static ormToEntity(dish: Dishes): Dish {
        return new Dish(
            dish.id,
            dish.name,
            dish.category,
        );
    }

    public async getById(id: number): Promise<Dish>
    {
        const dish = await getConnection().getRepository(Dishes)
            .createQueryBuilder("dish")
            .where("dish.id = :id", {id})
            .getOne();
        if (!dish) {
            return null;
        }

        return PgDishRepository.ormToEntity(dish);
    }

    public async getRandomByCategory(category: string): Promise<Dish> {

        const dish = await getConnection()
            .getRepository(Dishes)
            .createQueryBuilder("dish")
            .where("dish.category = :category", {category} )
            .orderBy("RANDOM()")
            .getOne();

        if (!dish) {
            return null;
        }

        return PgDishRepository.ormToEntity(dish);
    }

    public async add(dishData: object): Promise<void> {
        await getConnection().getRepository(Dishes)
            .insert(dishData);
    }
}
