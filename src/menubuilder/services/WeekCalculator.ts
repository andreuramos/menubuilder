export class WeekCalculator
{
    public execute(date?: Date): number
    {
        if (!date) {
            date = new Date();
        }
        const oneJan = new Date(date.getFullYear(), 0, 2, 0, 0, 0);
        const dayNumber = Math.ceil((date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)) + 1;

        return Math.ceil(dayNumber / 7);
    }
}
