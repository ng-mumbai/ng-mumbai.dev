import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { map, startWith, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  private readonly mobileBreakpoint = 768;
  private isMobileSubject = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeViewportTracking();
    }
  }

  private initializeViewportTracking(): void {
    const resize$ = fromEvent(window, 'resize').pipe(
      startWith(null),
      map(() => window.innerWidth <= this.mobileBreakpoint),
      distinctUntilChanged()
    );

    resize$.subscribe(isMobile => {
      this.isMobileSubject.next(isMobile);
    });
  }

  get isMobile$(): Observable<boolean> {
    return this.isMobileSubject.asObservable();
  }

  get isMobile(): boolean {
    return this.isMobileSubject.value;
  }
}
