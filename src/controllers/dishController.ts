import express from "express";
import {Container} from "../menubuilder/application/Container";
import {Category} from "../menubuilder/entities/Category";
import {CreateDish} from "../menubuilder/services/CreateDish";
import {GetDishes} from "../menubuilder/services/GetDishes";

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
    private getDishes;

    constructor() {
        this.createDish = Container.get(CreateDish);
        this.getDishes = Container.get(GetDishes);
    }

    public async add(req: express.Request, res: express.Response) {
        await this.createDish.execute(
            req.body.name,
            new Category(req.body.category),
        ).then(() => {
            res.status(200).send("OK");
        });
    }

    public async get(req: express.Request, res: express.Response) {
        await this.getDishes.execute()
            .then((dishes) => {
                res.status(200).send(JSON.stringify(dishes));
            });
    }
}
