import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  data = "";
  show = false;
  color = "blue";
  color1 ="green";
  users = ["Raju kumar","Rahul kumar gupta","Vikash kumar","Ram kumar","Basant kumar"]
  usersDetail =[
    {name : "raju kumar",mob : "7903241183",Dob : "12/06/97",Address : "Bihar patna"},
    {name : "raj kumar",mob : "7903241183",Dob : "11/06/97",Address : "Bihar patna"},
    {name : "rahul kumar",mob : "7903241183",Dob : "22/06/97",Address : "Bihar patna"},
    {name : "ram kumar",mob : "7903241183",Dob : "2/06/97",Address : "Bihar patna"}
  ]
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
