import { Component } from '@angular/core';

interface Organiser {
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-organisers',
  imports: [],
  templateUrl: './organisers.component.html',
  styleUrl: './organisers.component.css',
})
export class OrganisersComponent {
  organisers: Organiser[] = [
    {
      name: 'Sparsh Singh',
      description: 'This is a test description for Sparsh Singh.',
      imageUrl: 'https://avatars.githubusercontent.com/u/64547063?v=4',
    },
    {
      name: 'Anit Singh',
      description: 'This is a test description for Anit Singh.',
      imageUrl: 'https://avatars.githubusercontent.com/u/31277330?v=4',
    },
  ];
}
