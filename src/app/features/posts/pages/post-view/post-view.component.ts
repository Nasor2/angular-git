import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../../../core/interfaces/post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { of, switchMap } from 'rxjs';
import { User } from '../../../../core/interfaces/user.interface';
import { UsersService } from '../../../users/user.service';

@Component({
  standalone: true,
  selector: 'app-post-view',
  imports: [CommonModule],
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent {
  post: Post | null = null;
  userName = 'Desconocido';
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          if (!id) return of(null);
          return this.postsService.getPostById(id);
        })
      )
      .subscribe({
        next: post => {
          this.post = post;
          if (post) {
            this.usersService.getUsers().subscribe(users => {
              const user = users.find(u => u.id === post.userId);
              this.userName = user ? user.name : 'Desconocido';
            });
          }
        },
        error: () => this.post = null
      });
  }


  goBack() {
    this.router.navigate(['/']);
  }
}
