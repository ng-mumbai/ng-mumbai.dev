import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardMobileComponent } from './info-card-mobile.component';
import { InfoCardDesktopComponent } from './info-card-desktop.component';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, InfoCardMobileComponent, InfoCardDesktopComponent],
  templateUrl: './info-card.component.html',
})
export class InfoCardComponent {
  @Input() isMobile = false;
  @Input() title = '';
  @Input() content: string[] = [];
  @Input() buttonText = '';
  @Input() imageUrl = '';
  @Input() listItemsTitle = '';
  @Input() listItems: string[] = [];
  @Input() action = '';

  @Output() cardAction = new EventEmitter<string>();

  onCardAction(action: string): void {
    this.cardAction.emit(action);
  }
}
