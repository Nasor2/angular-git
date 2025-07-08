import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
export const POST_ROUTES: Routes = [
  {
    path: '',
    component: PostListComponent
   },
   {
    path: 'view/:id',
    loadComponent: () => import('./pages/post-view/post-view.component').then(m => m.PostViewComponent)
   },
  {
    path: 'edit/:id',
    loadComponent: () => import('./pages/post-edit/post-edit.component').then(m => m.PostEditComponent)
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/post-create/post-create.component').then(m => m.PostCreateComponent),
  }
];
