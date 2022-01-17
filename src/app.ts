import bodyParser from "body-parser";
import express from "express";
import {DishController} from "./controllers/dishController";
import { MenuController } from "./controllers/menuController";
import {ReplaceDishController} from "./controllers/replaceDishController";
import {initializeDB} from "./database/db";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Ratamahatta");
});
app.post("/menu", (req: express.Request, res: express.Response) => {
    MenuController.getInstance().build(req, res);
});
app.put("/menu/replace/:slot", (req: express.Request, res: express.Response) => {
    ReplaceDishController.getInstance().execute(req, res);
});
app.get("/menu", (req: express.Request, res: express.Response) => {
    MenuController.getInstance().get(req, res);
});

app.post("/dish", (req: express.Request, res: express.Response) => {
    DishController.getInstance().add(req, res);
});

app.listen(port, () => {
    initializeDB();
    // tslint:disable-next-line:no-console
    return console.log(`server is listening on ${port}`);
});
