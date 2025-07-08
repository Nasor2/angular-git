import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _toasts$ = new BehaviorSubject<Toast[]>([]);
  toasts$ = this._toasts$.asObservable();
  private currentId = 0;

  show(message: string, type: ToastType = 'info') {
    const id = this.currentId++;
    const newToast: Toast = { id, message, type };
    this._toasts$.next([...this._toasts$.value, newToast]);

    // auto-remover luego de 3 segundos
    setTimeout(() => {
      this._toasts$.next(this._toasts$.value.filter(t => t.id !== id));
    }, 3000);
  }

  success(message: string) {
    this.show(message, 'success');
  }

  error(message: string) {
    this.show(message, 'error');
  }

  info(message: string) {
    this.show(message, 'info');
  }
}
