import {Dish} from "./Dish";

export class Menu
{
    private mondayDish: Dish;
    private tuesdayDish: Dish;
    private wednesdayDish: Dish;
    private thursdayDish: Dish;
    private fridayDish: Dish;
    private weekNumber: number;

    public addDish(dish: Dish, weekday: string) {
        switch (weekday) {
            case "monday": this.mondayDish = dish; break;
            case "tuesday": this.tuesdayDish = dish; break;
            case "wednesday": this.wednesdayDish = dish; break;
            case "thursday": this.thursdayDish = dish; break;
            case "friday": this.fridayDish = dish; break;
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

    public setWeekNumber(week: number) {
        this.weekNumber = week;
    }

    public getWeekNumber() {
        return this.weekNumber;
    }
}
