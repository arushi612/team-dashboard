import { Component,Input } from '@angular/core';
import{MemberDetail} from './memberdetail';
import {Team} from'./team.component';

@Component({
  selector: 'hero-detail',
  templateUrl:'./hero.component.html',
  styleUrls:['./member.component.css']
 
})
export class Hero{
    @Input()
    gtdata:MemberDetail[]=[];
    
}
