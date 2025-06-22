import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InfoCardBaseComponent } from './info-card-base.component';

@Component({
  selector: 'app-info-card-mobile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="text-[#C9BECD] rounded-xl overflow-hidden flex flex-col h-[600px]" role="article" [attr.aria-label]="title">
      <div class="relative h-1/2 w-full">
        <img
          [ngSrc]="imageUrl"
          [alt]="title + ' illustration'"
          class="absolute inset-0 w-full h-full rounded-xl object-cover border-3 border-[#fffff]"
          [width]="800"
          [height]="400"
          priority
          placeholder
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#2b202f] via-black/60 to-transparent z-10"
          aria-hidden="true"
        ></div>
      </div>

      <div
        class="flex flex-col justify-between flex-grow p-6 z-20 relative bottom-[100px]"
      >
        <!-- Title -->
        <h3 class="text-4xl font-bold mb-4 tracking-tight text-white">
          {{ title }}
        </h3>

        @for (line of content; track line) {
        <div class="mb-2">
          <p class="font-dm-mono text-sm">{{ line }}</p>
        </div>
        } @if (listItemsTitle) {
        <div class="mb-2">
          <p class="font-dm-mono text-sm">{{ listItemsTitle }}</p>
        </div>
        } @if (listItems && listItems.length > 0) {
        <ul class="list-disc list-inside mb-6 text-sm text-gray-400 font-dm-mono" role="list">
          @for (item of listItems; track item) {
          <li role="listitem">{{ item }}</li>
          }
        </ul>
        }
        <div
          class="mt-auto self-start bg-gradient-to-r from-[#F40147] via-[#F833C7] to-[#961DF6] p-[2px] rounded-xl shadow-lg"
        >
          <button
            type="button"
            class="cursor-pointer bg-black text-white px-4 py-2 rounded-xl font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#F833C7] font-mono"
            (click)="onButtonClick()"
            [attr.aria-label]="buttonText + ' for ' + title"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class InfoCardMobileComponent extends InfoCardBaseComponent {
  @Input() imageUrl = '';
}
