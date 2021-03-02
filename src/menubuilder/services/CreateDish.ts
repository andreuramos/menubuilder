import {IDishRepository} from "../interfaces/IDishRepository";

export class CreateDish {

    private dishRepository;

    constructor(dishRepository: IDishRepository) {
        this.dishRepository = dishRepository;
    }

    public async execute(name: string, category: string): Promise<void>
    {
        const dishData = {
            name,
            category,
        };
        this.dishRepository.add(dishData);
    }
}
