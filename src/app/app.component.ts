import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Kezdetek';
  isAdmin:boolean=true;
  // MVC MOdel View Controller
  userName:string;
  oszlopok=["id","name","type"];

  ujAllat:any={};
  
  adat:any="";
  adatok:any=[];

  addAdat(vmi:any){
    this.adatok.push(vmi);
    console.log("adatok hozzáadva");
  }

  allatok:any=[
    {id:1, name:"Negro", type:"kutyus"},
    {id:2, name:"Inci", type:"cica"},
    {id:3, name:"Csipa", type:"kutyus"}
  ];
  
  addAnimal(allat:any){
    this.allatok.push(allat);
  }
  constructor(){
    this.userName="Julcsika";
  }
}
