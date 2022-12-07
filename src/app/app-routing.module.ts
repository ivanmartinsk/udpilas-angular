import { NotFoundComponent } from './components/not-found/not-found.component';
import { NoticiaViewComponent } from './main/noticias/noticia-view/noticia-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './main/noticias/noticias.component';
import { EditorComponent } from './components/editor/editor.component';
import { AbonadosComponent } from './main/abonados/abonados.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'editor', component: EditorComponent},
  { path: 'socios', component: AbonadosComponent},
  { path: 'noticia/:idnoticias', component: NoticiaViewComponent},
  { path: '**', component: NotFoundComponent} 
  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
