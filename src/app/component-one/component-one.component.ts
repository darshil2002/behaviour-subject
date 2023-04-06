import { Component } from '@angular/core';
import { MyservService } from '../allserv/myserv.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent {
  variableCompOne:any;
  constructor(private myserv:MyservService){
    this.myserv.nameToDisplay.subscribe(res=>{
      this.variableCompOne=res
    })
  }
  func(data:any){
    this.myserv.nameToDisplay.next(data)
  }
}
