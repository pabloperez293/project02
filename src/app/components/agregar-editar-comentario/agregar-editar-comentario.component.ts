import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comentarios } from 'src/app/interfaces/comentarios';


@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent {
  agregarComentario : FormGroup;

  constructor(private fb: FormBuilder){
    this.agregarComentario = this.fb.group({
      titulo: [``, Validators.required],
      creador: [``, Validators.required],
      texto: [``, Validators.required],
    })
  }

  ngOnit():void{

  }
  agregar() {
    console.log(this.agregarComentario);
    // Se crea un objeto de tipo comentario para agregar comentarios

    const comentario: comentarios = {
      titulo: this.agregarComentario.get("titulo")?.value,
      creador: this.agregarComentario.get("creador")?.value,
      texto: this.agregarComentario.get("texto")?.value,
      fechaCreacion: new Date
  }
  console.log(comentario);
  }
}
