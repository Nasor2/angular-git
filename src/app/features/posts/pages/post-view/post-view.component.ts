import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../../../core/interfaces/post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { of, switchMap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-post-view',
  imports: [CommonModule],
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent {
post: Post | null = null;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {}

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
        next: post => this.post = post,
        error: () => this.post = null
      });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
