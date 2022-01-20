import {Menu} from "../entities/Menu";
import {PgDishRepository} from "../external/PgDishRepository";
import {PgMenuRepository} from "../external/PgMenuRepository";
import {IMenuRepository} from "../interfaces/IMenuRepository";
import {GetMenu} from "./GetMenu";
import {MenuFactory} from "./MenuFactory";
import {WeekCalculator} from "./WeekCalculator";

export class BuildMenu
{
    private menuFactory;
    private menuRepository;
    private getMenu;

    constructor(menuFactory: MenuFactory, menuRepository: IMenuRepository, getMenu: GetMenu) {
        this.menuFactory = menuFactory;
        this.menuRepository = menuRepository;
        this.getMenu = getMenu;
    }

    public async execute(): Promise<Menu>
    {
        await this.removeExisting();
        const menu = await this.menuFactory.execute();
        await this.menuRepository.save(menu);
        return menu;
    }

    private async removeExisting()
    {
        const currentMenu = await this.getMenu.execute();
        if (currentMenu) {
            await this.menuRepository.delete(currentMenu);
        }
    }
}
