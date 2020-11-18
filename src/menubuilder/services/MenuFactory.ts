import {Menu} from "../entities/Menu";
import {InterfaceDishRepository} from "../interfaces/InterfaceDishRepository";

const CATEGORIES = [
    "pescado", "carne", "legumbre", "pasta", "verdura",
];

export class MenuFactory
{
    private dishRepository;

    constructor(dishRepository: InterfaceDishRepository) {
        this.dishRepository = dishRepository;
    }

    public execute(): Menu
    {
        const menu = new Menu();
        CATEGORIES.forEach((category, index) => {
            const dish = this.dishRepository.getRandomByCategory(category);
            const weekday = this.mapIndexToWeekday(index);
            menu.addDish(dish, weekday);
        });
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
