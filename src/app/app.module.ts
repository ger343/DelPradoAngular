import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{CargarScriptsService} from "./servicios/cargar-scripts.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { VideosComponent } from './componentes/videos/videos.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AboutEditComponent } from './componentes/about-edit/about-edit.component';
import { HomeEditComponent } from './componentes/home-edit/home-edit.component';
import { VideoAgregarComponent } from './componentes/video-agregar/video-agregar.component';

//*** Importamos las clases para trabajar con firestone ***//
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environments';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactoComponent,
    
    VideosComponent,
         LoginComponent,
         InicioComponent,
         AboutEditComponent,
         HomeEditComponent,
         VideoAgregarComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
