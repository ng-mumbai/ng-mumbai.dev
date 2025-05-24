import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, InfoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  infoCards = [
    {
      title: 'Monthly meetups',
      content: [
        ">> a monthly meetup series for angular developers in mumbai. whether you're just starting out or have years of experience, these events are designed to help you connect with other developers, learn from industry experts, and stay updated with the latest in angular and frontend development.",
      ],
      buttonText: 'SIGN UP FOR UPDATES',
      imageUrl: '../../assets/meetup.png',
    },
    {
      title: 'Submit your talk',
      content: [
        ">> ng mumbai is now accepting talk proposals for upcoming meetups. whether it's a hard-earned lesson, a clever workaround, or a fresh perspective on Angular.. we want to hear from you.",
      ],
      buttonText: 'BECOME A SPEAKER',
      listItems: [
        'Developers of all experience levels',
        'Speakers with practical, real-world takeaways',
        'Topics around Angular, frontend performance, tooling, testing, and more',
      ],
      imageUrl: '/assets/talk.png',
    },
    {
      title: 'Call for Sponsors',
      content: [
        ">> we're looking for sponsors to support our monthly meetups and get direct visibility with a focused, high-value tech audience.",
      ],
      buttonText: 'BECOME A SPONSOR',
      listItems: [
        'venue partners (coworking spaces, offices)',
        'food & beverage sponsors',
        'brands aligned with developer-first culture',
      ],
      imageUrl: '/assets/sponsors.png',
    },
  ];
}
