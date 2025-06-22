import { Injectable } from '@angular/core';
import { InfoCard } from '../models/info-card.interface';

@Injectable({
  providedIn: 'root'
})
export class MeetupDataService {
  private readonly infoCards: InfoCard[] = [
    {
      title: 'Monthly meetups',
      content: [
        ">> a monthly meetup series for angular developers in mumbai. whether you're just starting out or have years of experience, these events are designed to help you connect with other developers, learn from industry experts, and stay updated with the latest in angular and frontend development.",
      ],
      buttonText: 'SIGN UP FOR UPDATES',
      imageUrl: 'meetup_jttyfi.png',
      width: 400,
      height: 300,
      action: 'signup'
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
      imageUrl: 'call_for_sponsors_mnsug3.jpg',
      width: 400,
      height: 300,
      action: 'sponsor'
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
      imageUrl: 'talk_sj94j9.jpg',
      width: 400,
      height: 300,
      action: 'speaker'
    },
  ];

  getInfoCards(): InfoCard[] {
    return this.infoCards;
  }

  handleCardAction(action: string): void {
    switch (action) {
      case 'signup':
        // Handle signup action - could open modal, navigate, etc.
        console.log('Opening signup form...');
        break;
      case 'sponsor':
        // Handle sponsor action
        console.log('Opening sponsor information...');
        break;
      case 'speaker':
        // Handle speaker action
        console.log('Opening speaker submission form...');
        break;
      default:
        console.log('Unknown action:', action);
    }
  }
}
