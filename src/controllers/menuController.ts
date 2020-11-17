import express from "express";

export class MenuController {

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new MenuController();
        return this.instance;
    }

    private static instance;

    public build(req: express.Request, res: express.Response) {
        res.send("Here you have your menu sir");
    }
}
