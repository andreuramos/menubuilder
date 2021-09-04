export class Category
{
    private name: string;
    private VALID_NAMES = [
        "pescado", "carne", "legumbre", "pasta", "verdura", "especial",
    ];

    constructor(name: string) {
        if (this.VALID_NAMES.indexOf(name) === -1) {
            throw new Error(name + " is not a valid category");
        }
        this.name = name;
    }

    public getName(): string
    {
        return this.name;
    }
}
