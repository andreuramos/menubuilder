import {Menu} from "../entities/Menu";
import {IDishRepository} from "../interfaces/IDishRepository";
import {IMenuRepository} from "../interfaces/IMenuRepository";
import {GetMenu} from "./GetMenu";

export class ReplaceDish
{
    private getMenu;
    private dishRepository;
    private menuRepository;

    public constructor(getMenu: GetMenu, dishRepository: IDishRepository, menuRepository: IMenuRepository) {
        this.getMenu = getMenu;
        this.dishRepository = dishRepository;
        this.menuRepository = menuRepository;
    }

    public async execute(slot: string): Promise<Menu>
    {
        const menu = await this.getMenu.execute();
        const oldDish = menu.dishes()[slot];
        const category = oldDish.category;
        const dish = await this.dishRepository.getRandomByCategory(category);
        menu.addDish(dish, slot);
        this.menuRepository.delete(menu);
        this.menuRepository.save(menu);
        return menu;
    }
}
