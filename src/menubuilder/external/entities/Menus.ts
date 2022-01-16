import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Menus
{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("integer")
    public weeknumber: number;

    @Column("timestamp")
    public createdat: Date;

    @Column("timestamp")
    public updatedat: Date;
}
