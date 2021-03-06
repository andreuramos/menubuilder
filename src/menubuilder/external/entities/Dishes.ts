import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Dishes
{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("varchar", {length: 100})
    public name: string;

    @Column("varchar", {length: 25})
    public category: string;
}
