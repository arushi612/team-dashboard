import{Component,Input} from '@angular/core';
import{MemberDetail , TeamDetail} from './memberdetail';
//import{TeamDetail}from './memberdetail';
@Component({
    selector:'team-detail',
    templateUrl:'./team.component.html',
    styleUrls:['./member.component.css']
})
export class Team{
    LIST:MemberDetail[]=[];
    abc:TeamDetail[]=[];
    value:boolean;
    val:boolean;
   
    hero:MemberDetail[]=[];
     //main:MemberDetail[]=[];
    gtindex  = "10";
    selectedIndexes:number[]=[];
   
 @Input()
 maindata:TeamDetail[];

 @Input()
 MemberData:MemberDetail[];

    onselect(idd)
    {


 this.MemberData =  this.maindata[idd].main

console.log(this.MemberData)



    }
    delmul()
    {
        
        let newList=[];
        for(var index in this.selectedIndexes)
{
    let element=this.LIST[index];
    if(this.selectedIndexes[index]==0)
    {
        newList.push(element);
    }

}
this.LIST=newList;
this.resetCheckboxIndexes();
    }
    constructor()
    {
        this.LIST=
        [
            new MemberDetail(101,"teama","a","a@gmail.com",1),
            
            new MemberDetail(102,"teamb","b","b@gmail.com",2),
            
            new MemberDetail(103,"teamc","c","c@gmail.com",3),
            
            new MemberDetail(104,"teamd","d","d@gmail.com",4)
        ];
        this.resetCheckboxIndexes();
    }
    resetCheckboxIndexes()
    {
        this.selectedIndexes=[];
        for(var i in this.LIST)
        {
            this.selectedIndexes[i]=0;
        }
    }
    onadd(tid,tn,n,e,i)
    {
        this.value=true;
        if(!tid&&!tn&&!n&&!e&&!i)
        {
            alert("all blank");
        }
        else
        {
            this.LIST.push(new MemberDetail(tid,tn,n,e,i));
            this.value=false;
            
        this.resetCheckboxIndexes();
        }
    }
}