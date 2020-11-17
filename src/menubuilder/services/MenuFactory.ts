import {Menu} from "../entities/Menu";

export class MenuFactory
{
    public execute(): Menu
    {
        return new Menu();
    }
}
