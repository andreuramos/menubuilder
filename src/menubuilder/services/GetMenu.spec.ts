import {Menu} from "../entities/Menu";
import {IMenuRepository} from "../interfaces/IMenuRepository";
import {GetMenu} from "./GetMenu";

describe("Get Menu", () => {
    it("request current week menu to the repo",  async () => {
        const weekCalculator = {
           execute(): number {
               return 1;
           },
        };
        const menuRepository: IMenuRepository = {
            delete(menu: Menu): void {
                return;
            }, save(menu: Menu): void {
                return;
            },
            async getByWeekNumber(weekNumber: number): Promise<Menu> {
               return new Menu();
           },
        };
        const service = new GetMenu(weekCalculator, menuRepository);

        const response = await service.execute();

        expect(response).toBeInstanceOf(Menu);
    });
});
