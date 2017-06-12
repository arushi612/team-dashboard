import { Component,Input } from '@angular/core';
import{MemberDetail} from './memberdetail';
import {Team} from'./team.component';

@Component({
  selector: 'mem-detail',
  templateUrl:'./member.component.html',
  styleUrls:['./member.component.css']
 
})

export class Member{
  val:boolean;
//hero:MemberDetail;
 //@Input()
//gt:number = -1;
//@Input()
//maindata:MemberDetail[];

data = "I am Data"
 ind:number;   
DATA : MemberDetail[] = []


constructor()
{

//console.log("init data constr");

this.initData();
//this.clickme();

}

initData()
{
this.DATA = [];

const noOfTeamMembers= 10
//console.log("init data");
for(  let i = 0; i<noOfTeamMembers ; i++ )
{
  this.DATA.push(   new MemberDetail( (i+100),"nwteam","a","a@gmail.comm" , (i+1) )   )
}
this.DATA.push(new MemberDetail(101,"nwteam","a","a@gmail.com",1));
//this.DATA.push(new MemberDetail("b","b@gmail.com",2));
//this.DATA.push(new MemberDetail("c","c@gmail.com",3));
//this.DATA.push(new MemberDetail("d","d@gmail.com",4));
//console.log("dATA ADDED " + this.DATA)

}


}



  





