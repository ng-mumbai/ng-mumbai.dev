import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardBaseComponent } from './info-card-base.component';

@Component({
  selector: 'app-info-card-desktop',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-[#3F3145] text-[#C9BECD] p-6 rounded-lg border-2 border-[#504057] h-full flex flex-col"
      role="article"
      [attr.aria-label]="title"
    >
      <div class="flex-grow overflow-y-auto">
        <h3 class="text-5xl font-bold mb-3 tracking-tight">{{ title }}</h3>
        @for (line of content; track line) {
        <div class="mb-2">
          <p class="font-dm-mono">{{ line }}</p>
        </div>
        } @if (listItemsTitle) {
        <div class="mb-2">
          <p class="font-dm-mono">{{ listItemsTitle }}</p>
        </div>
        } @if (listItems && listItems.length > 0) {
        <ul class="list-disc list-inside mb-3 text-gray-400 font-dm-mono" role="list">
          @for (item of listItems; track item) {
          <li role="listitem">{{ item }}</li>
          }
        </ul>
        }
      </div>
      <div
        class="mt-auto self-start bg-gradient-to-r from-[#F40147] via-[#F833C7] to-[#961DF6] p-1 rounded-xl shadow-lg"
      >
        <button
          type="button"
          class="cursor-pointer bg-black text-white px-4 py-2 rounded-xl font-semibold text-lg uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#F833C7]"
          (click)="onButtonClick()"
          [attr.aria-label]="buttonText + ' for ' + title"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  `
})
export class InfoCardDesktopComponent extends InfoCardBaseComponent {}
