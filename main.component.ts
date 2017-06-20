import { Component, Input } from '@angular/core';
import{MemberDetail ,TeamDetail } from './memberdetail';

@Component({
  selector: 'appp-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class Main
{
  title = 'TEAM DETAILS!';

  // @Input()
  //   DATA :  MemberDetail[] = [];

  constructor()
  {
    this.initTeam()    
  }

  MemberData : MemberDetail[] = [];
  TeamData : TeamDetail[] = [];
arForRefresh:MemberDetail[]=[];
  dummyMemberData (num : number , tid : number) : MemberDetail[]
  {
    let MemberData =  [];
    let teamId =tid
    for(  let i = 0; i<num ; i++ )
    {
      MemberData.push(   new MemberDetail( (teamId),"Team"+teamId,"a","a"+(i+1)+"@gmail.comm" ,   (i+1) )   )
    }
    return MemberData
  }

  dummyTeamData()
  {
    this.TeamData = [];

    const noOfTeams = 8;
    for(  let i = 0; i<noOfTeams ; i++ )
    {
      let tmp =   this.dummyMemberData(i + 2 , i  )
      this.MemberData = this.MemberData.concat(tmp)
      this.TeamData.push( new TeamDetail( i , "Team " + i , "team"+i+"@gmail.com",  tmp ) )
    }

  }

  initTeam()
  {
    this.dummyTeamData();
  }
}
