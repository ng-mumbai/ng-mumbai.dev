import {
  Component,
  AfterViewInit,
  Type,
  ViewChild,
  ViewContainerRef,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements AfterViewInit {
  title = input<string>();
  width = input<string>();
  height = input<string>();

  close = output();

  isVisible = signal(false);

  @ViewChild('componentContainer', { read: ViewContainerRef, static: false })
  componentContainer!: ViewContainerRef;

  private pendingComponentLoad: { type: Type<unknown>; data?: unknown } | null =
    null;

  ngAfterViewInit(): void {
    if (this.pendingComponentLoad) {
      this.loadComponentImpl(
        this.pendingComponentLoad.type,
        this.pendingComponentLoad.data
      );
      this.pendingComponentLoad = null;
    }
  }

  open(): void {
    this.isVisible.set(true);
  }

  closeDialog(result?: any): void {
    this.isVisible.set(false);
    setTimeout(() => {
      this.close.emit(result);
    }, 200);
  }

  loadComponent<T>(componentType: Type<T>, data?: unknown): void {
    if (!this.componentContainer) {
      this.pendingComponentLoad = { type: componentType, data };
      return;
    }
    this.loadComponentImpl(componentType, data);
  }

  private loadComponentImpl<T>(componentType: Type<T>, data?: any): void {
    if (!this.componentContainer) {
      console.error('Component container is not initialized');
      return;
    }

    this.componentContainer.clear();
    const componentRef = this.componentContainer.createComponent(componentType);

    if (data) {
      Object.keys(data).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(componentRef.instance, key)) {
          (componentRef.instance as any)[key] = data[key];
        }
      });
    }

    if ((componentRef.instance as any).submitForm) {
      (componentRef.instance as any).submitForm.subscribe((result: any) => {
        this.closeDialog(result);
      });
    }

    if ((componentRef.instance as any).close) {
      (componentRef.instance as any).close.subscribe(() => {
        this.closeDialog();
      });
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('z-50')) {
      this.closeDialog();
    }
  }
}
