import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  // @Input() textColor: string;
  @Input() cssClass: string;
  @Input() text: string;

  constructor(private el: ElementRef) {
    debugger
    // this.el.nativeElement.style.color = this.textColor;
    this.el.nativeElement.className = this.cssClass;
    this.el.nativeElement.innerHTML = this.text;
  }

}
