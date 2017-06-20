import{Component,Input } from '@angular/core';
import{MemberDetail , TeamDetail} from './memberdetail';
@Component({
    selector:'team-detail',
    templateUrl:'./team.component.html',
    styleUrls:['./team.component.css']
})

export class Team
{


    tmpData : TeamDetail;
    selectedIndexes:number[]=[];
    ar:MemberDetail[]=[];
    ind:number=0;
    editSelected:boolean=false;
    maindata2:TeamDetail;
    _ind:number=0;
    mailSelected:boolean=false;
    received:boolean=false;
    removeSelected:boolean=false;
    statusindx:number=0;
indx:number=0;

display:boolean=false;
showAddMember:boolean=false;
@Input()
arrForRefresh:MemberDetail[];
    @Input()
        maindata:TeamDetail[];
    
    @Input()
        MemberData:MemberDetail[];
 
 oldtid:number=-1;
    oncheck(idd)
    {
        this.onselect(idd);
        // this.flag=1;       
        // this.gtindex=idd;
    
        const current=this.selectedIndexes[idd];

        if(current==0)
        {
            this.selectedIndexes[idd]=1;
        }
        else
        {
            this.selectedIndexes[idd]=0;
        }
        this.showAddMember=false;
    }
    editmail(i)
    {
        this.indx=i;
    }
    
    refresh()
    {
        this.showAddMember=false;
        this.editSelected=false;
        this.removeSelected=false;
        this.MemberData=[];

        for(var i=0;i<this.maindata.length;i++)
            this.MemberData=this.MemberData.concat(this.maindata[i].main);
    }
    send()
    {
        this.mailSelected=true;
    this.editSelected=false;
    }
    showedit()
    {
        this.editSelected=true;
        this.mailSelected=false;
    }
    onselect(idd)
    {
        this.showAddMember=true;
        this.oldtid=idd;
        // this.ind=idd;
        // if(this.flag==0)
        // {
        this.MemberData = this.maindata[idd].main;
        // this.ar=[];
        // }
        // else
        // {
        //     this.flag=0;
        // } 
    }
    edit(idd)
    { 
        this.tmpData = new TeamDetail().copy(this.maindata[idd] )
        // console.log("TMP DATA DEFINED: " + this.tmpData)
        this.ind=idd;
        this.maindata2=this.maindata[idd] ;
    }

    delmul()
    {
        let newList=[];
        for(var ind in this.selectedIndexes)
        {
            let element=this.maindata[ind];
            if(this.selectedIndexes[ind]==0)
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
        }
    }
    mail(eid)
    {
        for(var i=0;i<this.MemberData.length;i++)
        {
if(this.MemberData[i].email== eid)
    {
            // this.received=true;
            this.MemberData[i].status=true;
            //this.srcv=maindata[indx].Tname
    }

    }

    }

    updateTeam(mtid,mtn,mem)
    { 
        if(mtid){
            this.maindata2.Tid=mtid;
        }

        if(mtn){
            this.maindata2.Tname=mtn;
        }

        if(mem){
            this.maindata2.email=mem;
        }


        for(var i=0;i<this.MemberData.length;i++)
        {
            if(this.maindata[this.ind].Tid==this.MemberData[i].Tid)
            {
                this.MemberData[i].Tid=this.maindata2.Tid;
            }
        }
        for(var i=0;i<this.MemberData.length;i++)
        {
            if(this.maindata[this.ind].Tid==this.MemberData[i].Tid)
            {
                this.MemberData[i].Tname=this.maindata2.Tname;
            }
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
            for(var i=0;i<this.maindata.length;i++)
            {
                if(this.ar[0].Tid==this.maindata[i].Tid)
                {
                    this.maindata[i].main.push(this.ar[0]);
                }
            }
        }
        this.ar=[];


    // for(var i=0;i<this.maindata.length;i++){
        // if(mtid==this.maindata[i].Tid){
            
            // this.maindata[i].name=this.ar[0].name;
        //    this.ar=[];
            // console.log(this.maindata[i].name+" team objobj wala, ");

        // }
    // }
}

    onaddTeam(tid,tn,n,e,)
    {
        if(!tid&&!tn&&!n&&!e)
        alert("please enter team details");
        else
        {
        this.MemberData=this.MemberData.concat(this.ar);
        this.maindata.push(new TeamDetail(tid,tn,e,this.ar));         
        this.resetCheckboxIndexes();
        }
    }
}