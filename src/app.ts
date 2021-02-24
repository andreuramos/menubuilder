import express from "express";
import { MenuController } from "./controllers/menuController";
import {initializeDB} from "./database/db";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Ratamahatta");
});
app.get("/menu", (req: express.Request, res: express.Response) => {
    MenuController.getInstance().build(req, res);
});

app.listen(port, () => {
    initializeDB();
    // tslint:disable-next-line:no-console
    return console.log(`server is listening on ${port}`);
});
