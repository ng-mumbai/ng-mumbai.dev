import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './info-card.component.html',
})
export class InfoCardComponent {
  @Input() isMobile!: boolean;
  @Input() title!: string;
  @Input() content!: string[];
  @Input() buttonText!: string;
  @Input() imageUrl?: string;
  @Input() listItemsTitle?: string;
  @Input() listItems?: string[];

  processContentLine(line: string): string {
    return line.replace(/^>>\s*/, '');
  }
}
