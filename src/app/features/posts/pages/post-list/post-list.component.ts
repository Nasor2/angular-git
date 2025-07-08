import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../core/interfaces/post.interface';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: Post[] = [];
  router: any;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  onView(id: number) {
    this.router.navigate(['view', id]);
  }

  onEdit(id: number) {
    this.router.navigate(['edit', id]);
  }

  onDelete(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta publicación?')) {
      this.postsService.deletePost(id).subscribe(() => {
        this.posts = this.posts.filter(p => p.id !== id);
        alert('Publicación eliminada (simulado)');
      });
    }
  }
}
