import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../core/interfaces/post.interface';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { UsersService } from '../../../users/user.service';
import { User } from '../../../../core/interfaces/user.interface';


@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [CommonModule, PostCardComponent, ConfirmDialogComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: Post[] = [];
  users: User[] = [];
  currentPage = 1;
  postsPerPage = 10;
  searchTerm = '';
  selectedPostId: number | null = null;
  isConfirmDialogVisible = false;

  constructor(
    private router: Router,
    private postsService: PostsService,
    private usersService: UsersService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
    
  }

  getUserName(userId: number): string {
    return this.users.find(u => u.id === userId)?.name || 'Usuario desconocido';
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
    this.selectedPostId = id;
    this.isConfirmDialogVisible = true;
  }
  onCancelDelete(): void {
    this.selectedPostId = null;
    this.isConfirmDialogVisible = false;
  }
  onConfirmDelete(): void {
    if (this.selectedPostId !== null) {
      this.postsService.deletePost(this.selectedPostId).subscribe({
        next: () => {
          this.posts = this.posts.filter(p => p.id !== this.selectedPostId);
          this.toast.success('Publicación eliminada (simulado)');
          this.selectedPostId = null;
          this.isConfirmDialogVisible = false;
        },
        error: () => {
          this.toast.error('Error al eliminar');
          this.isConfirmDialogVisible = false;
        }
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
