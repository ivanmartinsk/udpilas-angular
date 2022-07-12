import { Etiquetas } from './Etiquetas';
import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable, BaseEntity} from "typeorm";

@Entity("noticias")
@Unique(["idnoticias"])
export class Noticias extends BaseEntity{

    @PrimaryGeneratedColumn()
    idnoticias: number;

    @Column({type: "text", nullable: true})
    tituloNoticia: string;

    @Column({type: "text", nullable: false})
    contenidoNoticia: string;

    @Column({type: "text", nullable: true})
    usuario: string;

    @Column({type: "date", nullable: false})
    fechaCreacion: Date;

    @Column({type: "date", nullable: true})
    fechaPublicacion: Date;

    @ManyToMany(() => Etiquetas, etiq => etiq.noticias, {cascade: true})
    @JoinTable()
    etiquetas: Etiquetas[];


}