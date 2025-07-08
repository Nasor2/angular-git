import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { Toast, ToastService } from '../../services/toast.service';

@Component({
  standalone: true,
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  toasts = signal<Toast[]>([]);

  constructor(private toastService: ToastService) {
    effect(() => {
      this.toastService.toasts$.subscribe(toasts => {
        this.toasts.set(toasts);
      });
    });
  }
}
