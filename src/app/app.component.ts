import {
  Component,
  ViewContainerRef,
  AfterViewInit,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogService } from './services/dialog.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DialogComponent, HeaderComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  private readonly dialogService = inject(DialogService<unknown>);
  private readonly viewContainerRef = inject(ViewContainerRef);

  ngAfterViewInit(): void {
    this.dialogService.setRootViewContainerRef(this.viewContainerRef);
  }
}
