import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeEditComponent } from './componentes/home-edit/home-edit.component';
import { AboutEditComponent } from './componentes/about-edit/about-edit.component';
import { VideoAgregarComponent } from './componentes/video-agregar/video-agregar.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'home-edit/:id',component:HomeEditComponent},
  {path:'about-edit/:id',component:AboutEditComponent},
  {path:'video-agregar',component:VideoAgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
