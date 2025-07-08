import { Routes } from '@angular/router';


export const routes: Routes = [
    {
    path: '',
    loadChildren: () =>
      import('./features/posts/posts.routes.routing').then((m) => m.POST_MODULES),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
