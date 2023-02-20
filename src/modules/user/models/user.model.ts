import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    firstname: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    lastname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    phone: string;


    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    address: string;

}