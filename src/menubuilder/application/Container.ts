import {Category} from "../entities/Category";
import {PgDishRepository} from "../external/PgDishRepository";
import {PgMenuRepository} from "../external/PgMenuRepository";
import {BuildMenu} from "../services/BuildMenu";
import {CreateDish} from "../services/CreateDish";
import {GetMenu} from "../services/GetMenu";
import {MenuFactory} from "../services/MenuFactory";
import {WeekCalculator} from "../services/WeekCalculator";

export class Container
{
    public static getInstance()
    {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this.build();
        return this.instance;
    }

    public static build()
    {
        const container = new this();
        const services = {
            IMenuRepository: new PgMenuRepository(),
            IDishRepository: new PgDishRepository(),
            CreateDish: new CreateDish(new PgDishRepository()),
            GetMenu: new GetMenu(new WeekCalculator(), new PgMenuRepository()),
            BuildMenu: new BuildMenu(
                new MenuFactory(new PgDishRepository(), new WeekCalculator()),
                new PgMenuRepository(),
                new GetMenu(new WeekCalculator(), new PgMenuRepository()),
            ),
        };
        container.setServices(services);
        this.instance = container;
        return container;
    }

    public static get(requestedClass) {
        if (this.instance == null) {
            console.log("Not initialized motherfucker");
        }
        const key = requestedClass.name;
        this.instance.services[key].execute("hola", new Category("carne"));
        return this.instance.services[key];
    }

    private static instance;

    private services = {};

    private setServices(servicesObject) {
        this.services = servicesObject;
    }
}
