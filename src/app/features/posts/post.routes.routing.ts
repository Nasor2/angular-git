import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
const routes: Routes = [
  {
    path: '',
    component: PostListComponent
   },
];

export const Post = RouterModule.forChild(routes);
