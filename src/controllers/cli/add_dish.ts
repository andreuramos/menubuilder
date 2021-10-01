import {initializeDB} from "../../database/db";
import {Category} from "../../menubuilder/entities/Category";
import {PgDishRepository} from "../../menubuilder/external/PgDishRepository";
import {CreateDish} from "../../menubuilder/services/CreateDish";

initializeDB().then(() => {
    const args = process.argv.slice(2);
    const categoryName = args[0];
    const dishName = args[1];
    const createDish = new CreateDish(new PgDishRepository());

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
