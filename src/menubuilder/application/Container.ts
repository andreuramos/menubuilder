import {Category} from "../entities/Category";
import {PgDishRepository} from "../external/PgDishRepository";
import {CreateDish} from "../services/CreateDish";

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
            CreateDish: new CreateDish(new PgDishRepository()),
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
        console.log("Retrieving " + key + " from services", this.instance.services, this.instance.services[key]);
        this.instance.services[key].execute("hola", new Category("carne"));
        return this.instance.services[key];
    }

    private static instance;

    private services = {};

    private setServices(servicesObject) {
        this.services = servicesObject;
    }
}
