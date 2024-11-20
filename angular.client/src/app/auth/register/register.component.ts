import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private http: HttpClient) { }

  aaStr: string = "aa";
  users: any;

  method1() {
    alert('hi');
  }

  fetchData() {
    this.http.get('https://localhost:7070/api/User/GetAll').subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      }
    );
  }
}
