import { AuthInterceptorProvider } from './auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NoticiasComponent } from './main/noticias/noticias.component';
import { AbonadosComponent } from './main/abonados/abonados.component';
import { EditorComponent } from './components/editor/editor.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EditorDateDialogComponent } from './components/editor-date-dialog/editor-date-dialog.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoticiaViewComponent } from './main/noticias/noticia-view/noticia-view.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AddSocioDialogComponent } from './main/add-socio-dialog/add-socio-dialog.component';
import { DeleteConfirmDialogComponent } from './main/abonados/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlertComponent } from './components/alert/alert.component';
import { MatDividerModule } from '@angular/material/divider';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { LoginComponent } from './components/login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MiembrosComponent } from './main/miembros/miembros.component';
import { PlantillaComponent } from './main/plantilla/plantilla.component';
import { CuerpoTecnicoComponent } from './main/cuerpo-tecnico/cuerpo-tecnico.component';
import { AdministracionNoticiasComponent } from './main/administracion-noticias/administracion-noticias.component';
import { AddMiembroDialogComponent } from './main/add-miembro-dialog/add-miembro-dialog.component';
import { OrganigramaComponent } from './main/static-pages/organigrama/organigrama.component';
import { EstadioComponent } from './main/static-pages/estadio/estadio.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import { UpdateJugadorDialogComponent } from './main/plantilla/update-jugador-dialog/update-jugador-dialog.component';
import { AddRegistroCorpDialogComponent } from './main/plantilla/add-registro-corp-dialog/add-registro-corp-dialog.component';
import { TransferirJugadorDialogComponent } from './main/plantilla/transferir-jugador-dialog/transferir-jugador-dialog.component';
import { DetalleJugadorDialogComponent } from './main/plantilla/detalle-jugador-dialog/detalle-jugador-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { EquiposComponent } from './main/equipos/equipos.component';
import { SponsorsComponent } from './main/static-pages/sponsors/sponsors.component';
import { PromocionesComponent } from './main/static-pages/promociones/promociones.component';
import { HazteSocioComponent } from './main/static-pages/hazte-socio/hazte-socio.component';
import { DetalleEntrenoDialogComponent } from './main/cuerpo-tecnico/detalle-entreno-dialog/detalle-entreno-dialog.component';
import { RegistrarSesionDialogComponent } from './main/cuerpo-tecnico/registrar-sesion-dialog/registrar-sesion-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NoticiasComponent,
    EditorComponent,
    EditorDateDialogComponent,
    NoticiaViewComponent,
    AbonadosComponent,
    AddSocioDialogComponent,
    DeleteConfirmDialogComponent,
    NotFoundComponent,
    AlertComponent,
    LoginComponent,
    MiembrosComponent,
    PlantillaComponent,
    CuerpoTecnicoComponent,
    AdministracionNoticiasComponent,
    AddMiembroDialogComponent,
    OrganigramaComponent,
    EstadioComponent,
    UpdateJugadorDialogComponent,
    AddRegistroCorpDialogComponent,
    TransferirJugadorDialogComponent,
    DetalleJugadorDialogComponent,
    EquiposComponent,
    SponsorsComponent,
    PromocionesComponent,
    HazteSocioComponent,
    DetalleEntrenoDialogComponent,
    RegistrarSesionDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    CKEditorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatProgressBarModule,
    MatToolbarModule,
    FormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    FlexLayoutModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatDividerModule,
    NgxTwitterTimelineModule,
    MatTabsModule,
    MatTreeModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [AuthInterceptorProvider, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
