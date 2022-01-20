import express from "express";
import {Container} from "../menubuilder/application/Container";
import {PgDishRepository} from "../menubuilder/external/PgDishRepository";
import {PgMenuRepository} from "../menubuilder/external/PgMenuRepository";
import {GetMenu} from "../menubuilder/services/GetMenu";
import {ReplaceDish} from "../menubuilder/services/ReplaceDish";
import {WeekCalculator} from "../menubuilder/services/WeekCalculator";

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

    private replaceDish;

    public constructor()
    {
        this.replaceDish = Container.get(ReplaceDish)
    }

    public async execute(req: express.Request, res: express.Response)
    {
        const slot = req.params.slot;
        const updatedMenu = await this.replaceDish.execute(slot);
        res.send(JSON.stringify(updatedMenu));
    }
}
