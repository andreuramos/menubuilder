import {Menu} from "../entities/Menu";

export interface IMenuRepository
{
    save(menu: Menu): void;
}
