import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header class="flex justify-between items-center px-8 py-4 border-b border-gray-800">
    <div class="flex items-center">
      <img src="../../../assets/angular.png" alt="ngMumbai Logo" class="h-12">
      <h1 class="text-4xl font-bold">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F40147] via-[#F833C7] to-[#961DF6]">ng</span><span>Mumbai</span>
      </h1>
    </div>
    <nav class="flex gap-8">
      <a routerLink="/home" routerLinkActive="active" class="hover:text-[#F833C7] transition-colors">Attend</a>
      <a routerLink="/sponsor" routerLinkActive="active" class="hover:text-[#F833C7] transition-colors">Sponsor</a>
      <a routerLink="/speaker" routerLinkActive="active" class="hover:text-[#F833C7] transition-colors">Speak</a>
    </nav>
  </header>
`,

  styles: `
  .active {
    color: #F833C7;
    border-bottom: 2px solid #F833C7;
    transition: all 0.3s ease;
  }
`,

  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent {

}
