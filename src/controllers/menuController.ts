import express from "express";
import {PgMenuRepository} from "../menubuilder/external/PgMenuRepository";
import {BuildMenu} from "../menubuilder/services/BuildMenu";
import {GetMenu} from "../menubuilder/services/GetMenu";

export class MenuController {

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new MenuController();
        return this.instance;
    }

    private static instance;

    private buildMenu;
    private getMenu;

    constructor() {
        this.buildMenu = new BuildMenu();
        this.getMenu = new GetMenu();
    }

    public async build(req: express.Request, res: express.Response) {
        await this.buildMenu.execute().then(async (menu) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(menu));
        });
    }

    public async get(req: express.Request, res: express.Response) {
        const menu = await this.getMenu.execute();
        res.status(200).send(JSON.stringify(menu));
    }
}
