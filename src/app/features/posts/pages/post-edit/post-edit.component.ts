import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { switchMap, of } from 'rxjs';
import { Post } from '../../../../core/interfaces/post.interface';
import { User } from '../../../../core/interfaces/user.interface';
import { UsersService } from '../../../users/user.service';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  standalone: true,
  selector: 'app-post-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  postId!: number;
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    // Cargar usuarios
    this.usersService.getUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: () => this.toast.error('Error al cargar usuarios')
    });

    // Cargar post
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          this.postId = id;
          if (!id) return of(null);
          return this.postsService.getPostById(id);
        })
      )
      .subscribe({
        next: (post: Post | null) => {
          if (!post) return;
          this.form = this.fb.group({
            userId: [post.userId, Validators.required],
            title: [post.title, [Validators.required, Validators.minLength(3)]],
            body: [post.body, Validators.required],
          });
        },
        error: () => {
          this.toast.error('Error al cargar publicación');
          this.router.navigate(['/']);
        }
      });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedPost: Post = { id: this.postId, ...this.form.value };
      this.postsService.updatePost(this.postId, updatedPost).subscribe({
        next: () => {
          this.toast.success('¡Publicación actualizada!');
          this.router.navigate(['/']);
        },
        error: () => this.toast.error('Error al actualizar publicación')
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
