export class Dish
{
    private id: number;
    private name: string;
    private category: string;

    constructor(id: number, name: string, category: string) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
}
