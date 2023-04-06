import { Component } from '@angular/core';
import { MyservService } from './allserv/myserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'behaviourSubject';
  variableOfHome:string | undefined;
  constructor (private myserv:MyservService){
    this.myserv.nameToDisplay.subscribe(res=>{
      this.variableOfHome= res;
    })
  }

}
