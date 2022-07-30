import {Dish} from "../entities/Dish";
import {IDishRepository} from "../interfaces/IDishRepository";

export class GetDishes
{
    private dishRepository;

    constructor(dishRepository: IDishRepository) {
        this.dishRepository = dishRepository;
    }

    public async execute(): Promise<Dish[]>
    {
        return this.dishRepository.getAll();
    }
}
