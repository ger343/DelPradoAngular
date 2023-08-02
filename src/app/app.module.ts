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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
