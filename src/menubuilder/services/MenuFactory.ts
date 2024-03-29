import {Menu} from "../entities/Menu";
import {IDishRepository} from "../interfaces/IDishRepository";
import {WeekCalculator} from "./WeekCalculator";

const CATEGORIES = [
    "pescado", "carne", "legumbre", "pasta", "verdura",
];

export class MenuFactory
{
    private dishRepository;
    private weekCalculator;

    constructor(dishRepository: IDishRepository, weekCalculator: WeekCalculator) {
        this.dishRepository = dishRepository;
        this.weekCalculator = weekCalculator;
    }

    public async execute(): Promise<Menu>
    {
        const menu = new Menu();
        return this.buildMenu(menu);
    }

    private buildMenu = async (menu) => {
        for ( let index = 0; index < CATEGORIES.length; index++) {
            const category = CATEGORIES[index];
            await this.dishRepository.getRandomByCategory(category)
                .then( (dish) => {
                    const weekday = this.mapIndexToWeekday(index);
                    menu.addDish(dish, weekday);
                });
        }
        menu.setWeekNumber(this.weekCalculator.execute());

        return menu;
    }

    private mapIndexToWeekday(index: number): string
    {
        switch (index) {
            case 0: return "monday";
            case 1: return "tuesday";
            case 2: return "wednesday";
            case 3: return "thursday";
            case 4: return "friday";
        }
    }
}
