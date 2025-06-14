import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, InfoCardComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  infoCards = [
    {
      title: 'Monthly meetups',
      content: [
        ">> a monthly meetup series for angular developers in mumbai. whether you're just starting out or have years of experience, these events are designed to help you connect with other developers, learn from industry experts, and stay updated with the latest in angular and frontend development.",
      ],
      buttonText: 'SIGN UP FOR UPDATES',
      imageUrl: 'meetup_jttyfi.png',
      width: 400,
      height: 300,
    },
    {
      title: 'Call for Sponsors',
      content: [
        ">> We're looking for sponsors to support our monthly meetups and get direct visibility with a focused, high-value tech audience.",
      ],
      buttonText: 'BECOME A SPONSOR',
      listItems: [
        'venue partners (coworking spaces, offices)',
        'food & beverage sponsors',
        'brands aligned with developer-first culture',
      ],
      listItemsTitle: ">> We're looking for:",
      imageUrl: 'sponsors_ryuuoz.png',
      width: 400,
      height: 300,
    },
    {
      title: 'Submit your talk',
      content: [
        '>> NG Mumbai is accepting talk proposals! Share your Angular insights, lessons, or workarounds with our community.',
      ],
      buttonText: 'BECOME A SPEAKER',
      listItems: [
        'Developers of all experience levels',
        'Speakers with practical, real-world takeaways',
        'Topics around Angular, frontend performance, tooling, testing, and more',
      ],
      listItemsTitle: '>> Who should apply:',
      imageUrl: 'talk_fucdca.png',
      width: 400,
      height: 300,
    },
  ];
}
