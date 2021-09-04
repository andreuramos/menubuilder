import {Category} from "../entities/Category";
import {IDishRepository} from "../interfaces/IDishRepository";

export class CreateDish {

    private dishRepository;

    constructor(dishRepository: IDishRepository) {
        this.dishRepository = dishRepository;
    }

    public async execute(name: string, category: Category): Promise<void>
    {
        const categoryName = category.getName();
        const dishData = {
            name,
            categoryName,
        };
        this.dishRepository.add(dishData);
    }
}
