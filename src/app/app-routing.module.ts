import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes: Routes = [
// Se agregan objetos cuando la ruta este vacia
  { path: "", component: ListComentariosComponent },
  { path: "agregar", component: AgregarEditarComentarioComponent },
  { path: "editar/:id", component: AgregarEditarComentarioComponent },
  { path: "ver/:id", component: VerComentariosComponent },
  // Lo redirecciona al primer componente, esta ruta siempre tiene q estar en el final
  { path: "**", redirectTo: "/", pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
