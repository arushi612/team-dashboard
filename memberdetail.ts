export class MemberDetail
{
    Tid:number;
    Tname:string;
    name:string;
    email:string;
    id:number;
    
    main:MemberDetail[]=[];
    constructor(tid,tname,name,email,id)
    {
        this.Tid=tid;
        this.Tname=tname;
        this.name=name;
        this.email=email;
        this.id=id;
       //this.main.push( new MemberDetail(name , email , id) ) 

       //console.log(this.main[0])
    }
}

export class TeamDetail
{
    Tid:number;
    Tname:string;
    name:string;
    email:string;
    id:number;
   main:MemberDetail[];



    constructor(tid,tname,name,email , main )
    {
        this.Tid=tid;
        this.Tname=tname;
        this.name=name;
        this.email=email;
        this.id= tid;

        this.main = main
     
    }



}