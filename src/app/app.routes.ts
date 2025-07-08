import { Routes } from '@angular/router';


export const routes: Routes = [
    {
    path: '',
    loadChildren: () =>
      import('./features/posts/posts.routes').then((m) => m.POST_ROUTES),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
