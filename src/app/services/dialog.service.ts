import {
  Injectable,
  ComponentRef,
  ViewContainerRef,
  Type,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogComponent } from '../components/dialog/dialog.component';

export type DialogConfig<T> = {
  title?: string;
  component: Type<unknown>;
  data?: T;
  width?: string;
  height?: string;
};

export type DialogRef = {
  afterClosed: Observable<unknown>;
  close: (result?: unknown) => void;
};

@Injectable({
  providedIn: 'root',
})
export class DialogService<T> {
  private dialogComponentRef: ComponentRef<DialogComponent> | null = null;
  private viewContainerRef: ViewContainerRef | null = null;
  private closeSubject = new BehaviorSubject<unknown>(null);

  setRootViewContainerRef(vcRef: ViewContainerRef) {
    this.viewContainerRef = vcRef;
  }

  open(config: DialogConfig<T>): DialogRef {
    if (!this.viewContainerRef) {
      throw new Error(
        'ViewContainerRef is not set. Call setRootViewContainerRef() first.'
      );
    }

    this.closeAll();
    this.closeSubject = new BehaviorSubject<unknown>(null);

    this.dialogComponentRef =
      this.viewContainerRef.createComponent(DialogComponent);
    this.dialogComponentRef.setInput('title', config.title || '');
    this.dialogComponentRef.setInput('width', config.width || '500px');
    this.dialogComponentRef.setInput('height', config.height || 'auto');

    const dialogComponent = this.dialogComponentRef.instance;
    dialogComponent.loadComponent(config.component, config.data);
    dialogComponent.close.subscribe((result) => {
      this.close(result);
    });
    dialogComponent.open();
    return {
      afterClosed: this.closeSubject.asObservable(),
      close: (result?: unknown) => this.close(result),
    };
  }

  private close(result?: unknown) {
    if (this.dialogComponentRef) {
      this.viewContainerRef?.remove(
        this.viewContainerRef.indexOf(this.dialogComponentRef.hostView)
      );
      this.dialogComponentRef = null;
      this.closeSubject.next(result);
    }
  }

  closeAll() {
    if (this.dialogComponentRef) {
      this.close();
    }
  }
}
