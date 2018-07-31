import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatusChanged]'
})
export class StatusChangedDirective {
  @Input() statusActive:boolean; 

  @HostListener('click', ['$event.target'])
  onclick(e:any) {
    if(this.statusActive)
    {
      document.getElementById("badge").style.backgroundColor = "green";
    }
    else
    {
      document.getElementById("badge").style.backgroundColor = "gray";
    }
  }

  constructor() { }
}
