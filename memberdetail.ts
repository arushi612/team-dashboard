export class MemberDetail
{
    Tid:number;
    Tname:string;
    name:string;
    email:string;
    id:number;
    status:boolean=false;
    main:MemberDetail[]=[];

    constructor(tid=0,tname='',name='',email='',id=0)
    {
        this.Tid=tid;
        this.Tname=tname;
        this.name=name;
        this.email=email;
        this.id=id;
    }
}

export class TeamDetail
{
    Tid:number;
    Tname:string;
    
    email:string;
    id:number;
    main:MemberDetail[];

    copy(cloneThis : TeamDetail )
    {
        this.Tid=cloneThis.Tid;
        this.Tname=cloneThis.Tname;

        this.email=cloneThis.email;
        this.main = cloneThis.main;

        return this;
    }
    
    constructor(tid=0, tname='', email='', main=[])
    {
        this.Tid=tid;
        this.Tname=tname;

        this.email=email;
        this.main = main;
    }
}
