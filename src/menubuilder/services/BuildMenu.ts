import {Menu} from "../entities/Menu";
import {PgDishRepository} from "../external/PgDishRepository";
import {MenuFactory} from "./MenuFactory";

export class BuildMenu
{
    private menuFactory;

    constructor() {
        this.menuFactory = new MenuFactory(new PgDishRepository());
    }

    public async execute(): Promise<Menu>
    {
        return this.menuFactory.execute();
    }
}
