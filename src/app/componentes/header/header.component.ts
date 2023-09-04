import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged: string = sessionStorage.getItem ('test')
  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  onClick() {
    this.userService.logout()
      .then(() => {
        sessionStorage.clear();
        //this.router.navigate(['']);
        window.location.reload();
      })
      .catch(error => console.log(error));
  }

}
