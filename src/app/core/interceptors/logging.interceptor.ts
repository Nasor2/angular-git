import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ToastService } from '../../shared/services/toast.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private toast: ToastService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`[HTTP] ${req.method} → ${req.url}`);

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log(`[HTTP] ← ${req.url} (${event.status})`);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(`[HTTP ERROR] ${req.url}:`, error.message);
        this.toast.error(`Error al contactar el servidor`);
        return throwError(() => error);
      })
    );
  }
}
