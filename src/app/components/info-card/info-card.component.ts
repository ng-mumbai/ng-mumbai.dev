import { Component, input, output } from '@angular/core';
import { InfoCardDetail } from './info-card.type';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
})
export class InfoCardComponent {
  cardDetail = input<InfoCardDetail>();
  buttonClick = output<string>();

  processContentLine(line: string): string {
    return line.replace(/^>>\s*/, '');
  }

  onButtonClick(): void {
    const buttonText = this.cardDetail()?.buttonText;
    if (buttonText) {
      this.buttonClick.emit(buttonText);
    }
  }
}
