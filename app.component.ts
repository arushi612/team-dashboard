import { Component , Input } from '@angular/core';
import{MemberDetail ,TeamDetail } from './memberdetail';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEAM DETAILS!';

  @Input()
DATA :  MemberDetail[] = [];

constructor()
  {


    this.initTeam()
   
    console.log(this.TeamData)
    console.log(this.MemberData)

    
  }


MemberData : MemberDetail[] = [];
TeamData : TeamDetail[] = [];


dummyMemberData (num : number , tid : number) : MemberDetail[]
{
  console.log("generateDummyMembers"  + num)
let MemberData =  [];

let teamId =tid
for(  let i = 0; i<num ; i++ )
{


  MemberData.push(   new MemberDetail( (teamId),"nwteam","a","a@gmail.comm" ,   (i+1) )   )
}

return MemberData
}




dummyTeamData()
{
this.TeamData = [];

const noOfTeams = 5

for(  let i = 0; i<noOfTeams ; i++ )
{

 let tmp =   this.dummyMemberData(i + 2 , i  )

 this.MemberData = this.MemberData.concat(tmp)



this.TeamData.push( new TeamDetail( i , "Team " + i , "name " + i  , "team"+i+"@gmail.com",  tmp ) )

console.log("TEAM " + i)
console.log("Members")
console.log(tmp.length)

}


}

initTeam()
{

this.dummyTeamData();

}




}
