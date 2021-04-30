import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Menus
{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("timestamp")
    public createdAt: Date;

    @Column("timestamp")
    public updatedAt: Date;
}
