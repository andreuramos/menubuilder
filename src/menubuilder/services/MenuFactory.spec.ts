import {Menu} from "../entities/Menu";
import {MenuFactory} from "./MenuFactory";

describe("Menu Factory", () => {
    it ("Returns a menu", () => {
        const factory = new MenuFactory();

        const menu = factory.execute();

        expect(menu).toBeInstanceOf(Menu);
    });
});
