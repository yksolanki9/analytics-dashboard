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

    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(
      regex,
      (match) => `<span class="text-highlight">${match}</span>`
    );
  }

  private updateTemplate(searchQuery: string) {
    const value = this.elementRef.nativeElement.innerHTML;
    if (!value.includes('<canvas')) {
      const highlightedValue = this.highlightText(
        value,
        searchQuery
      );
      this.elementRef.nativeElement.innerHTML = highlightedValue;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm'] && !changes['searchTerm'].firstChange) {
      this.updateTemplate(changes['searchTerm'].currentValue);
    }
  }

  ngAfterViewInit() {
    if(this.searchTerm) {
      this.updateTemplate(this.searchTerm);
    }
  }
}
