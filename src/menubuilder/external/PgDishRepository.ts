import {getConnection} from "typeorm";
import {Dish} from "../entities/Dish";
import {IDishRepository} from "../interfaces/IDishRepository";
import {ORMDish} from "./entities/ORMDish";

export class PgDishRepository implements IDishRepository
{
    private static ormToEntity(dish: ORMDish): Dish {
        return new Dish(
            dish.id,
            dish.name,
            dish.category,
        );
    }

    public async getRandomByCategory(category: string): Promise<Dish> {

        const dish = await getConnection()
            .getRepository(ORMDish)
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
        await getConnection().getRepository(ORMDish)
            .insert(dishData);
    }
}
