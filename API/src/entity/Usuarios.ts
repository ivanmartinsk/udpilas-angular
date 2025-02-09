import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable, OneToOne, JoinColumn} from "typeorm";
import * as bcrypt from "bcryptjs";
import { Roles } from "./Roles";
import { Miembros } from "./Miembros";

@Entity("usuarios")
@Unique(['idusuario'])
export class Usuarios {
 
    @PrimaryGeneratedColumn()
    idusuario: number;

    @Column({type: "varchar", width: 255, default: null, nullable: true})
    nombre: string;

    @Column({type: "varchar", width: 255, default: null, nullable: true})
    apellidos: string;

    @Column({type: "varchar", width: 255, default: null, nullable: false})
    email: string;

    @Column({type: "date", nullable: true})
    fecha_nacimiento: Date;

    @Column({type: "text", width: 255, default: null, nullable: false})
    password: string;

    @Column({type: "varchar", width: 255, default: null, nullable: true})
    telefono: string;

    @ManyToMany(type => Roles, rol => rol.usuarios, {
        eager: true,
        onDelete: "CASCADE"
    })
    @JoinTable()
    roles: Roles[];

    checkPassword(password: string):boolean{
        return bcrypt.compareSync(password, this.password);
    }

}