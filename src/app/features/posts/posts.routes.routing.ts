import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
export const POST_MODULES: Routes = [
  {
    path: '',
    component: PostListComponent
   },
];
