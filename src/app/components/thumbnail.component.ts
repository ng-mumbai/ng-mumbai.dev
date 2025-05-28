import { Component, input } from '@angular/core';

@Component({
  selector: `app-thumbnail`,
  template: `
    <div class="w-full h-96 relative overflow-hidden rounded-lg">
      <img
        [src]="imageUrl()"
        [alt]="alt()"
        class="w-full h-full object-cover"
      />
    </div>
  `,
})
export class ThumbnailComponent {
  imageUrl = input<string>();
  alt = input<string>();
}
