import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { HeaderComponent } from '../header/header.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { MeetupDataService } from '../../services/meetup-data.service';
import { ViewportService } from '../../services/viewport.service';
import { InfoCard } from '../../models/info-card.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, InfoCardComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  isMobile = false;
  infoCards: InfoCard[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private meetupDataService: MeetupDataService,
    private viewportService: ViewportService
  ) {}

  ngOnInit(): void {
    this.infoCards = this.meetupDataService.getInfoCards();

    this.viewportService.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isMobile => {
        this.isMobile = isMobile;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCardAction(action: string): void {
    this.meetupDataService.handleCardAction(action);
  }
}
