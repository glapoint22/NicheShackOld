import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    let token = this.authService.getToken();

    if (token) {
      this.authService.setToken(token);
    }
  }
} 