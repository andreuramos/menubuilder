import {Menu} from "../entities/Menu";
import {IMenuRepository} from "../interfaces/IMenuRepository";
import {WeekCalculator} from "./WeekCalculator";

export class GetMenu {
    private menuRepository;
    private weekCalculator;

    public constructor(weekCalculator: WeekCalculator, menuRepository: IMenuRepository) {
        this.weekCalculator = weekCalculator;
        this.menuRepository = menuRepository;
    }

    public async execute(): Promise<Menu>
    {
        const weekNumber = this.weekCalculator.execute();
        return this.menuRepository.getByWeekNumber(weekNumber);
    }
}
