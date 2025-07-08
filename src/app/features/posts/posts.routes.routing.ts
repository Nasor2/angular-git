import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
export const POST_MODULES: Routes = [
  {
    path: '',
    component: PostListComponent
   },
   {
    path: 'view/:id',
    loadComponent: () => import('./pages/post-view/post-view.component').then(m => m.PostViewComponent)
   }
];
