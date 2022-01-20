import {initializeDB} from "../../database/db";
import {Container} from "../../menubuilder/application/Container";
import {BuildMenu} from "../../menubuilder/services/BuildMenu";

initializeDB().then(() => {
    const menubuilder = Container.get(BuildMenu);
    const menu = menubuilder.execute().then(menu => {
        console.log(menu);
    });
});
