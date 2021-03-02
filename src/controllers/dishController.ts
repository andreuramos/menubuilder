import express from "express";
import {PgDishRepository} from "../menubuilder/external/PgDishRepository";
import {CreateDish} from "../menubuilder/services/CreateDish";

export class DishController {
    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new DishController();
        return this.instance;
    }

    private static instance;
    private createDish;

    constructor() {
        this.createDish = new CreateDish(new PgDishRepository());
    }

    public async add(req: express.Request, res: express.Response) {
        await this.createDish.execute(
            req.body.name,
            req.body.category,
        ).then(() => {
            res.status(200).send("OK");
        });
    }
}
