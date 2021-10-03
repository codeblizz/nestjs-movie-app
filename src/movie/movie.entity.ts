import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    release_date: Date;
    // rating: rating;
    @Column()
    ticket_price: BigInt;
    @Column()
    country: string;
    // genre: genre;
    @Column()
    photo: string;
}