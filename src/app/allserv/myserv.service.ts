import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyservService {


  nameToDisplay=new BehaviorSubject('admin')
  constructor() { }
}
