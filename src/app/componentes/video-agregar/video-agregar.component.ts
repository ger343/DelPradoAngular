import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/servicios/video.service';

@Component({
  selector: 'app-video-agregar',
  templateUrl: './video-agregar.component.html',
  styleUrls: ['./video-agregar.component.css']
})
export class VideoAgregarComponent implements OnInit {

  public videoForm: FormGroup;

  constructor(
    public videoService: VideoService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.videoForm = this.formBuilder.group({
      linkvideo : [''],
      titulovideo : [''],
      descripcionvideo : ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.videoService.createVideo(this.videoForm.value),
    this.router.navigate([''])
  }

}
