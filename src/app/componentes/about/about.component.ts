import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from "../../servicios/cargar-scripts.service"
import { About } from 'src/app/about.model';
import { AboutService } from 'src/app/servicios/about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  About:About []

  constructor(private aboutService: AboutService,
    private _CargaScripts:CargarScriptsService)
  {}
    ngOnInit(): void {
      this.aboutService.getAbout().subscribe((res) => {
        this.About = res.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as About)
          }
  
        })
      })
    this._CargaScripts.carga(["scripts"]);
  }

}  
  
function ngOnInit() {
  throw new Error('Function not implemented.');
}

