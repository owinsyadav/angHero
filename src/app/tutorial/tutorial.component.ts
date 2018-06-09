import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'my-tutorials',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.css'],
    /* Inputs and output  */
    inputs: ['parentData'],
    outputs: ['childEvents']
})

export class TutorialsComponent{
  title = "Testing Tutorials";
  imgLink = "https://lorempixel.com/300/200";
  /* class Binding  */
  applyClass = true;cone = true;ctwo = true;
  /* style Binding  */
  applyblue = false;
  /* Event Binding start  */
  onClick(value){
      console.log(value);
  }
  /* Event Binding end  */
  parentData: string;
  childEvents = new EventEmitter<string>();
  onChange(value:string){
      this.childEvents.emit(value);
  }
  fname; lname;
  showelement = true;
  public color = 'red';
  sty = 'italic'; siz = '20px';
   items = ['red', 'green', 'blue'];
   toggle(){
       this.cone =! this.cone;
       this.ctwo =! this.ctwo;
   }
}