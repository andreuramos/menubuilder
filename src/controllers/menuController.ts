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

    public build(req: express.Request, res: express.Response) {
        const menu = this.menuFactory.execute();
        res.status(200).send(JSON.stringify(menu));
    }
}
