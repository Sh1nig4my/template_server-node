import { Entity, Column, ObjectIdColumn, ObjectId } from "typeorm";

@Entity("users")
export class User {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}