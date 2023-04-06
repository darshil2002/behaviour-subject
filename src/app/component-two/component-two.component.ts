import { Component } from '@angular/core';
import { MyservService } from '../allserv/myserv.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent {
  compTwoVariable:any;
  constructor(private myserv:MyservService){
    this.myserv.nameToDisplay.subscribe(res=>{

      this.compTwoVariable= res
    })
  }
  func(data:any){
    this.myserv.nameToDisplay.next(data);
  }
}
