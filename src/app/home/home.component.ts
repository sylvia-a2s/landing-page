import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

// @Component({
//   moduleId: module.id,
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  //styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  // users: User[] = [];
  user: User
  title = 'app';
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
        .subscribe(user => {
            this.user = user;
        });
  }

}
