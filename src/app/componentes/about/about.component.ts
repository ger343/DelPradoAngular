import { Component } from '@angular/core';
import {CargarScriptsService} from "../../servicios/cargar-scripts.service"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor( private _CargaScripts:CargarScriptsService){

    _CargaScripts.carga(["scripts"]);
  }

}
