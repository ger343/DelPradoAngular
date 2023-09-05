import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {

  public editForm: FormGroup;
  editRef: any;
 

  constructor(
    public aboutService: AboutService,
    public formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
    )
      { 
        this.editForm = this.formBuilder.group({
          imgabout : [''],
          textoabout : ['']
        })
      }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.aboutService.getAboutById(id).subscribe( res => {
      this.editRef = res;
      this.editForm = this.formBuilder.group({
        imgabout: [this.editRef.imgabout],
        textoabout: [this.editRef.textoabout]     
      }) 
    })
  }

  onSubmit(){
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.aboutService.updateDatos(this.editForm.value, id);
    this.router.navigate(['']);
  }

}



