import { Component,Input } from '@angular/core';
import{MemberDetail,TeamDetail} from './memberdetail';
import {Team} from'./team.component';

@Component({
  selector: 'hero-detail',
  templateUrl:'./hero.component.html',
  styleUrls:['./team.component.css']
 
})
export class Hero{
  // gttdata:MemberDetail[]=[];
  gtdata2:MemberDetail;
__ind : number = 0;
srcv:string='none';
@Input()
indx:number=0;
@Input()
rcv:boolean;

    @Input()
 gtdata:MemberDetail[]=[];
 @Input()
 sindx:number=0;
   
   @Input()
   oldTid:number=-1;
    index:number=-1;
    newTid:number=0;
    gt:number=0;
    memid:number=-1;
    
    @Input()
    tdata:TeamDetail[];
   
    ngOnInIt()
    {
      // this.gttdata=this.gtdata;
            // this.gttdata=this.gtdata;

    }

  
    pass(i)
    {
      this.gt=i;
      
this.newTid = this.tdata[i].Tid;
    }
    edit(idd)
    {
     this.__ind = idd;
     this.memid=this.gtdata[idd].id;
  //  this.gttdata=[ this.gtdata[idd] ];
    this.gtdata2=this.gtdata[idd];
  }
  


        update(mtid,mtn,mna,mem,mid)
    { 
     


if(1==1)
{



let Removed = this.tdata[this.oldTid].main.splice(this.memid-1, 1)

this.tdata[this.newTid].main.push(Removed[0]);

console.log(this.tdata[this.oldTid].main)
console.log(this.tdata[this.oldTid].main)



  return;
}



    if(mtid)
    {
        // this.gttdata[0].Tid=mtid;
        this.gtdata2.Tid=mtid;
    }
if(mtn)
{
        //  this.gttdata[0].Tname=mtn;
        this.gtdata2.Tname=mtn;
}
         if(mna)
         {
          // this.gttdata[0].name=mna;
          this.gtdata2.name=mna;
         }
          if(mem)
          {
          //  this.gttdata[0].email=mem;
          this.gtdata2.email=mem;

          }
           if(mid)
           {
            // this.gttdata[0].id=mid;
            this.gtdata2.id=mid;
           }
      //  this.gttdata=[this.gttdata[0]];
     
        }
  
}
