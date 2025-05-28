import { Component, inject } from "@angular/core";
import { InfoCardComponent } from "../components/info-card/info-card.component";
import { ThumbnailComponent } from "../components/thumbnail.component";
import { SignupFormComponent } from "../components/signup-form/signup-form.component";
import { TalkFormComponent } from "../components/talk-form/talk-form.component";
import { DialogService } from "../services/dialog.service";

@Component({
  selector: 'app-home',
  imports: [InfoCardComponent, ThumbnailComponent],
  template: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      @for (item of infoCards; track $index) {
        <app-info-card [cardDetail]="item" (buttonClick)="handleButtonClick($event)" />
        <app-thumbnail [imageUrl]="item.imageUrl" [alt]="item.title" />
      }
    </div>
  `,
})
export class HomeComponent {
  public readonly dialogService = inject(DialogService<unknown>);

  infoCards = [
    {
      title: 'Monthly meetups',
      content: [
        ">> a monthly meetup series for angular developers in mumbai. whether you're just starting out or have years of experience, these events are designed to help you connect with other developers, learn from industry experts, and stay updated with the latest in angular and frontend development.",
      ],
      buttonText: 'SIGN UP FOR UPDATES',
      imageUrl: '/assets/meetup.png',
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

  openTalkForm(): void {
    this.dialogService.open({
      title: 'Submit your talk',
      component: TalkFormComponent,
      width: '600px'
    }).afterClosed.subscribe(result => {
      if (result) {
        console.log('Talk submission:', result);
        alert('Thank you for your talk submission!');
      }
    });
  }

  openSignupForm(): void {
    this.dialogService.open({
      title: 'Sign up for event updates',
      component: SignupFormComponent,
      width: '600px'
    }).afterClosed.subscribe(result => {
      if (result) {
        console.log('Signup submission:', result);
        alert('Thank you for signing up for event updates!');
      }
    });
  }

  openSponsorForm(): void {
    alert('Sponsor form coming soon! Please contact us at info@ng-mumbai.dev for sponsorship opportunities.');
  }

  handleButtonClick(buttonText: string): void {
    switch (buttonText) {
      case 'SIGN UP FOR UPDATES':
        this.openSignupForm();
        break;
      case 'BECOME A SPEAKER':
        this.openTalkForm();
        break;
      case 'BECOME A SPONSOR':
        this.openSponsorForm();
        break;
      default:
        console.log('Unknown button clicked:', buttonText);
    }
  }
}
