import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = "";
  @Output()
  public searchEvent = new EventEmitter<string>();
  @ViewChild('txtInput')
  public input!:ElementRef<HTMLInputElement>
  public emitSearchEvent(value:string){
    if (value.length > 0)
    this.searchEvent.emit(value)
    this.input.nativeElement.value = "";
  }
}
