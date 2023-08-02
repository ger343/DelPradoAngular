import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit { 
  ngAfterViewInit(): void {
    const script=
    document.createElement('script');
    script.src='/src/assets/js/scripts.js';
    document.body.appendChild(script)
  }

}
