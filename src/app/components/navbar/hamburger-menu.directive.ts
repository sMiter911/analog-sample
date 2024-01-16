import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[apphamburgermenu]',
  standalone: true,
})
export class HamburgerMenuDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('TSEK!!!');
  }
}
