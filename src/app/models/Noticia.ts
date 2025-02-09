import { Etiqueta } from "./Etiqueta";
import { Imagen } from "./Imagen";

//interfaz con las propiedades requeridas de la noticia
export interface Noticia {
    tituloNoticia: String;
    contenidoNoticia: String;
    usuario: String;
    fechaCreacion: String;
    fechaPublicacion: String;
    esPortada: Boolean;
    urlImagen: String;
  }