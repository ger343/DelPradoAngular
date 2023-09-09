import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/servicios/home.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})


export class HomeEditComponent implements OnInit {
  
  public editForm: FormGroup;
  editRef: any;
 

  constructor(
      public homeService: HomeService,
      public formBuilder: FormBuilder,
      private activateRoute: ActivatedRoute,
      private router: Router
    )
      { 
        this.editForm = this.formBuilder.group({
          imghome : [''],
          textohome : ['']
        })
      }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.homeService.getHomeById(id).subscribe( res => {
      this.editRef = res;
      this.editForm = this.formBuilder.group({
        imghome: [this.editRef.imghome],
        textohome: [this.editRef.textohome]     
      }) 
    })
  }

  onSubmit(){
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.homeService.updateDatos(this.editForm.value, id);
    sessionStorage.setItem('test','Si');
    this.router.navigate(['']);
  }

}
