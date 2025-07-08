import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../core/interfaces/post.interface';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';
@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(
    private router: Router,
    private postsService: PostsService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  goToCreate(): void {
    this.router.navigate(['create']);
  }

  onView(id: number) {
    this.router.navigate(['view', id]);
  }

  onEdit(id: number) {
    this.router.navigate(['edit', id]);
  }

  onDelete(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
    this.postsService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter(p => p.id !== id);
        this.toast.success('Publicación eliminada (simulado)');
      },
      error: () => this.toast.error('Error al eliminar publicación')
    });
  }
  }
}
