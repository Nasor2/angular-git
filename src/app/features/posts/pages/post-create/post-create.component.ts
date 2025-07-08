import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../posts.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../../shared/services/toast.service';
@Component({
  standalone: true,
  selector: 'app-post-create',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router,
    private toast: ToastService
  ) {
    this.form = this.fb.group({
      userId: [null, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.postsService.createPost(this.form.value).subscribe({
        next: () => {
          this.toast.success('¡Publicación creada!');
          this.router.navigate(['/']);
        },
        error: () => this.toast.error('Error al crear publicación')
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
