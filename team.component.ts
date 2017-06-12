import{Component,Input } from '@angular/core';
import{MemberDetail , TeamDetail} from './memberdetail';
@Component({
    selector:'team-detail',
    templateUrl:'./team.component.html',
    styleUrls:['./team.component.css']
})
export class Team{
    LIST:MemberDetail[]=[];
    abc:TeamDetail[]=[];
    val:boolean=false;
    flag=0;

    hero:MemberDetail[]=[];
    gtindex  = "10";
    selectedIndexes:number[]=[];
    ar:MemberDetail[]=[];
   
 @Input()
 maindata:TeamDetail[];
 
 @Input()
 MemberData:MemberDetail[];
 
    oncheck(idd)
    {
        this.onselect(idd);//self
        this.flag=1;       
        this.gtindex=idd;
    
        const current=this.selectedIndexes[idd];

        if(current==0)
        {
            this.selectedIndexes[idd]=1;
        }
        else
        {
            this.selectedIndexes[idd]=0;
        }
    }

    onselect(idd)
    {
        if(this.flag==0)
        {
            this.MemberData =  this.maindata[idd].main    
            this.ar=[];
        }
        else
        {
            this.flag=0;
        }
            
    }

    delmul()
    {
        //console.log("selInd at beg delmul: "+this.selectedIndexes);
        let newList=[];
        for(var index in this.selectedIndexes)
        {
            let element=this.maindata[index];
            if(this.selectedIndexes[index]==0)
            {
                newList.push(element);
            }
        }
        this.maindata=newList;
        this.resetCheckboxIndexes();
    }

    constructor()
    {        
    }

   ngOnInit()
   {
       this.resetCheckboxIndexes();
   }

    resetCheckboxIndexes()
    {
        this.selectedIndexes=[];
        for(var i in this.maindata)
        {
            this.selectedIndexes[i]=0;
            console.log("in resetchkind: "+this.selectedIndexes[i]);
        }
    }

    onaddmem(mtid,mtn,mna,mem,mid)
    {    
        if(!mtid&&!mtn&&!mna&&!mem&&!mid)
        {
            alert("please enter members");
        }
        else
        {
        this.ar.push(new MemberDetail(mtid,mtn,mna,mem,mid));
        this.MemberData=this.MemberData.concat(this.ar);
        }
    }
    
    onadd(tid,tn,n,e,)
    {
        if(!tid&&!tn&&!n&&!e)
        alert("please enter team details");
        else
        {
        this.MemberData=this.MemberData.concat(this.ar);
        this.maindata.push(new TeamDetail(tid,tn,n,e,this.ar));         
        this.resetCheckboxIndexes();
        }
    }
}