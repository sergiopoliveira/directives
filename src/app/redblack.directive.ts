import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {


  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.color = "white";
    el.nativeElement.style.backgroundColor = "black";
  }

  ngOnInit() {
    this.el.nativeElement.innerText += " - rendered by appRedblack"
  }

}
