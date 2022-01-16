import {Menu} from "../entities/Menu";
import {PgMenuRepository} from "../external/PgMenuRepository";
import {WeekCalculator} from "./WeekCalculator";

export class GetMenu {
    private menuRepository;
    private weekCalculator;

    public constructor() {
        this.menuRepository = new PgMenuRepository();
        this.weekCalculator = new WeekCalculator();
    }

    public async execute(): Promise<Menu>
    {
        const weekNumber = this.weekCalculator.execute();
        return this.menuRepository.getByWeekNumber(weekNumber);
    }
}
