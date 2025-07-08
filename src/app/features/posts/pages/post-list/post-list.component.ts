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
  currentPage = 1;
  postsPerPage = 10;
  searchTerm = '';


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


  get filteredPosts(): Post[] {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedPosts(): Post[] {
    const start = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(start, start + this.postsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  onSearchChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.searchTerm = input.value;
  this.currentPage = 1;
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
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
