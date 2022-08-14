import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication';
import { UserDataService } from '../services/user-data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input('user') user: User;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  private getUser(): void {
    if (this.isLoggedIn()) {
      this.user = this.authService.getCurrentUser();
    }
  }

}
