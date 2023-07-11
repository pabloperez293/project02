import { Component } from '@angular/core';
import { comentarios } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent {

  listComentarios: comentarios[] = [
    { titulo : `React`,creador: "Pablo" ,fechaCreacion: new Date(), texto: "libreria"},
    { titulo : `javascript`,creador: "Perez" ,fechaCreacion: new Date(), texto: "programcion"}

  ]

}
