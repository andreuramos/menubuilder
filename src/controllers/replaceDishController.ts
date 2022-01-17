import express from "express";
import {PgDishRepository} from "../menubuilder/external/PgDishRepository";
import {PgMenuRepository} from "../menubuilder/external/PgMenuRepository";
import {GetMenu} from "../menubuilder/services/GetMenu";
import {ReplaceDish} from "../menubuilder/services/ReplaceDish";

export class ReplaceDishController
{
    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ReplaceDishController();
        return this.instance;
    }

    private static instance;

    private getMenu;
    private replaceDish;

    public constructor()
    {
        this.getMenu = new GetMenu();
        this.replaceDish = new ReplaceDish(new PgDishRepository(), new PgMenuRepository());
    }

    public execute(req: express.Request, res: express.Response)
    {
        const slot = req.params.slot;
        const menu = this.getMenu.execute();
        const updatedMenu = this.replaceDish.execute(menu, slot);
        res.send(JSON.stringify(updatedMenu));
    }
}
