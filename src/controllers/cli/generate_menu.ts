import {initializeDB} from "../../database/db";
import {BuildMenu} from "../../menubuilder/services/BuildMenu";

initializeDB().then(() => {
    const menubuilder = new BuildMenu();
    const menu = menubuilder.execute().then(menu => {
        console.log(menu);
    });
});
