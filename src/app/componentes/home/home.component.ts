import { Component, OnInit } from '@angular/core';

import { Home } from 'src/app/home.model';
import { HomeService } from 'src/app/servicios/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  Home: Home[] 
  authenticated: boolean = false;

  constructor(private homeService: HomeService) { }




  
  ngOnInit(): void {
    this.homeService.getHome().subscribe((res) => {
      this.Home = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Home)
        }

      })
    })

  }

  ngAfterViewInit(): void {
    const script =
      document.createElement('script');
    script.src = '/src/assets/js/scripts.js';
    document.body.appendChild(script)
  }

}
