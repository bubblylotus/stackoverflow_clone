import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.user == null){
      let user_str = localStorage.getItem("user");
      if(user_str != null){
        this.userService.user = JSON.parse(user_str);
        this.router.navigate(['/home']);
      }
      else{
        this.router.navigate(['/login'])
      }
    }
  }

  logout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
