import {Menu} from "../entities/Menu";
import {IDishRepository} from "../interfaces/IDishRepository";
import {IMenuRepository} from "../interfaces/IMenuRepository";

export class ReplaceDish
{
    private dishRepository;
    private menuRepository;

    public constructor(dishRepository: IDishRepository, menuRepository: IMenuRepository) {
        this.dishRepository = dishRepository;
        this.menuRepository = menuRepository;
    }

    public async execute(menu: Menu, slot: string): Promise<Menu>
    {
        const oldDish = menu.dishes()[slot];
        const category = oldDish.category;
        const dish = await this.dishRepository.getRandomByCategory(category);
        menu.addDish(dish, slot);
        this.menuRepository.save(menu);
        return menu;
    }
}
