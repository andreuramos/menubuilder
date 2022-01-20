import {initializeDB} from "../../database/db";
import {Container} from "../../menubuilder/application/Container";
import {Category} from "../../menubuilder/entities/Category";
import {CreateDish} from "../../menubuilder/services/CreateDish";

initializeDB().then(() => {
    const args = process.argv.slice(2);
    const categoryName = args[0];
    const dishName = args[1];
    const createDish = Container.get(CreateDish);

    try {
        createDish.execute(
            dishName,
            new Category(categoryName),
        );
    } catch (e) {
        console.log(e);
    }
    console.log("Dish added correctly");
});
