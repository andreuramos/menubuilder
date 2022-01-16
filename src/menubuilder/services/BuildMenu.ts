import {Menu} from "../entities/Menu";
import {PgDishRepository} from "../external/PgDishRepository";
import {PgMenuRepository} from "../external/PgMenuRepository";
import {GetMenu} from "./GetMenu";
import {MenuFactory} from "./MenuFactory";
import {WeekCalculator} from "./WeekCalculator";

export class BuildMenu
{
    private menuFactory;
    private menuRepository;
    private getMenu;

    constructor() {
        this.menuFactory = new MenuFactory(new PgDishRepository(), new WeekCalculator());
        this.menuRepository = new PgMenuRepository();
        this.getMenu = new GetMenu();
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
