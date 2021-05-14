import express from "express";
import {BuildMenu} from "../menubuilder/services/BuildMenu";

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

    constructor() {
        this.buildMenu = new BuildMenu();
    }

    public async build(req: express.Request, res: express.Response) {
        await this.buildMenu.execute().then((menu) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(menu));
        });
    }
}
