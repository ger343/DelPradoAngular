import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video.model';
import { VideoService } from 'src/app/servicios/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  Video: Video[]
  isLogged: string = sessionStorage.getItem ('test')
  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideo().subscribe( (res) =>{
      this.Video = res.map( (e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Video)
        };
      });
    });
  }
  
  deleteRow = (video) => this.videoService.deleteVideo(video); 


}
