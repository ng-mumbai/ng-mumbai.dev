import { Input, Output, EventEmitter, OnInit, Directive } from '@angular/core';

@Directive()
export abstract class InfoCardBaseComponent implements OnInit {
  @Input() title = '';
  @Input() content: string[] = [];
  @Input() buttonText = '';
  @Input() listItemsTitle = '';
  @Input() listItems: string[] = [];
  @Input() action = '';

  @Output() cardAction = new EventEmitter<string>();

  ngOnInit(): void {
    this.validateInputs();
  }

  protected validateInputs(): void {
    if (!this.title) {
      console.warn(`${this.constructor.name}: title is required`);
    }
    if (!this.content.length) {
      console.warn(`${this.constructor.name}: content is required`);
    }
    if (!this.buttonText) {
      console.warn(`${this.constructor.name}: buttonText is required`);
    }
  }

  onButtonClick(): void {
    if (this.action) {
      this.cardAction.emit(this.action);
    }
  }
}
