import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatDividerModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng';
}

//@Component({
//    selector: 'app-root',
//    templateUrl: './app.component.html',
//    styleUrl: './app.component.css',
//})
//export class AppComponent {
//  constructor() { }

//  ngOnInit() {
    
//  }

//  title = 'angular.client';
//}
