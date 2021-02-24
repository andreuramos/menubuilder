import express from "express";
import {PgDishRepository} from "../menubuilder/external/PgDishRepository";
import {MenuFactory} from "../menubuilder/services/MenuFactory";

export class MenuController {

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new MenuController();
        return this.instance;
    }

    private static instance;

    private menuFactory;

    constructor() {
        this.menuFactory = new MenuFactory(new PgDishRepository());
    }

    public async build(req: express.Request, res: express.Response) {
        await this.menuFactory.execute().then((menu) => {
            res.status(200).send(JSON.stringify(menu));
        });
    }
}
