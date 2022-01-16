import {Column, Entity} from "typeorm";

@Entity()
export class DishesMenus
{
    @Column("integer", {primary: true})
    public dishid: number;

    @Column("integer", {primary: true})
    public menuid: number;

    @Column("varchar", {length: 25})
    public menuslot: string;
}
