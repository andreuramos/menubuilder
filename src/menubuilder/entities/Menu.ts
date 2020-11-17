import {Dish} from "./Dish";

export class Menu
{
    private mondayDish: Dish;
    private tuesdayDish: Dish;
    private wednesdayDish: Dish;
    private thursdayDish: Dish;
    private fridayDish: Dish;

    public addDish(dish: Dish, weekday: string) {
        switch (weekday) {
            case "monday": this.mondayDish = dish; break;
            case "tuesday": this.mondayDish = dish; break;
            case "wednesday": this.mondayDish = dish; break;
            case "thursday": this.mondayDish = dish; break;
            case "saturday": this.mondayDish = dish; break;
        }
    }

    public dishes() {
        return {
            monday: this.mondayDish,
            tuesday: this.tuesdayDish,
            wednesday: this.wednesdayDish,
            thursday: this.thursdayDish,
            friday: this.fridayDish,
        };
    }
}
