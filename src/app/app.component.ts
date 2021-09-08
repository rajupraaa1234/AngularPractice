import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  getName(){
    alert("Hello World this is angular")
  }
  getFullName(name:any){
    alert("Hello " + name)
  }
}
