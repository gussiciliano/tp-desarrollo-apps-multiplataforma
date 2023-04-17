import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
