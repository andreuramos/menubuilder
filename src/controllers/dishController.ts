import express from "express";
import {Container} from "../menubuilder/application/Container";
import {Category} from "../menubuilder/entities/Category";
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
        this.createDish = Container.get(CreateDish);
    }

    public async add(req: express.Request, res: express.Response) {
        await this.createDish.execute(
            req.body.name,
            new Category(req.body.category),
        ).then(() => {
            res.status(200).send("OK");
        });
    }
}
