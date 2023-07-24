import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective {
  @Input('appHighlightText') searchTerm: string; 

  constructor(private elementRef: ElementRef) {}

  private highlightText(text: string, searchTerm: string): string {
    if (!searchTerm || searchTerm.trim() === '') {
      return text;
    }

    const re = new RegExp(searchTerm, 'gi');
    return text.replace(
      re,
      (match) => `<span class="text-highlight">${match}</span>`
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm'] && !changes['searchTerm'].firstChange) {
      const value = this.elementRef.nativeElement.innerHTML;
      if(!value.includes('<canvas')) {
        const highlightedValue = this.highlightText(
          value,
          changes['searchTerm'].currentValue
        );
        this.elementRef.nativeElement.innerHTML = highlightedValue;
      }
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if(this.searchTerm) {
        const value = this.elementRef.nativeElement.innerHTML;
        if(!value.includes('<canvas')) {
          const highlightedValue = this.highlightText(
            value,
            this.searchTerm
          );
          this.elementRef.nativeElement.innerHTML = highlightedValue;
        }
      }
    }, 1000)
  }
}
