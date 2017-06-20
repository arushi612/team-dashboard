import{Directive,ElementRef,HostListener,Input} from '@angular/core';
import{Team}from './team.component'
@Directive({selector:'[my-data]'})
export class MyData{
    constructor(private el:ElementRef){}
    @Input('my-data') accept:string;
   
    private change(color:string)
    {
this.el.nativeElement.style.backgroundColor=color;
    }

    ngOnInit()
    {

    }
    
}