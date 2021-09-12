import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  data = "";
  show = false
  getName(){
    alert("Hello World this is angular")
  }
  getFullName(name:any){
    alert("Hello " + name)
    console.warn("This is consol data")
  }
  printConsoleData(){
    console.warn("This is consol data")
  }
  printConsoleWithData(val :string){
    console.warn(val)
  }
  printConsoleOnBlur(val : string){
    console.warn(val)
  }

  mouseOverCalled(){
    console.warn("MouseOver Called")
  }

  mouseLeaveCalled(){
    console.warn("MouseLeave Called")
  }

  printValueOnPAge(val:any){
       this.data = val;
  }

}
