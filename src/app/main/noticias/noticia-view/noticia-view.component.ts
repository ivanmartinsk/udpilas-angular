import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { NoticiaRequest } from 'src/app/models/NoticiaRequest';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-noticia-view',
  templateUrl: './noticia-view.component.html',
  providers: [NoticiasService],
  styleUrls: ['./noticia-view.component.css']
})



export class NoticiaViewComponent implements OnInit {


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private route: ActivatedRoute, private noticiasService: NoticiasService) {
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/instagram-logo-svgrepo-com.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/twitter-svgrepo-com.svg'));
    iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/facebook-svgrepo-com.svg'));
    iconRegistry.addSvgIcon('whatsapp', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/whatsapp-svgrepo-com.svg'));
    this.route.paramMap.subscribe(params => {
      this.idNoticiaSeleccionada = params.get('idnoticias');
    });
    this.getNoticiaById(this.idNoticiaSeleccionada);
    
   }

    ngOnInit(): void {  
    }
    
  //en el html usamos noticiaSeleccionada con interrogacion pq sino da error
  //da error porque la lectura del html se hace antes que el getNoticiaByiD emita 
  //el resultado y se actualice la variable con valores
  idNoticiaSeleccionada: String;
  noticiaSeleccionada: NoticiaRequest;
  contenidoNoticia: Text;

  htmlToText(): void {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = "sdaadadas";

  }


  //Llamadas a los servicios necesarios
  
 
  getNoticiaById(id): void{
    this.noticiasService.getNoticiaById(id).subscribe(res => {
      this.noticiaSeleccionada = res;
    })
  }


}
