import {Menu} from "../entities/Menu";
import {PgDishRepository} from "../external/PgDishRepository";
import {PgMenuRepository} from "../external/PgMenuRepository";
import {MenuFactory} from "./MenuFactory";
import {WeekCalculator} from "./WeekCalculator";

export class BuildMenu
{
    private menuFactory;
    private menuRepository;

    constructor() {
        this.menuFactory = new MenuFactory(new PgDishRepository(), new WeekCalculator());
        this.menuRepository = new PgMenuRepository();
    }

    public async execute(): Promise<Menu>
    {
        const menu = await this.menuFactory.execute();
        await this.menuRepository.save(menu);
        return menu;
    }
}
