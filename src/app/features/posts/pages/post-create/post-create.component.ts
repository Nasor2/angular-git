import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../posts.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    private router: Router
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
          alert('¡Publicación creada!');
          this.router.navigate(['/']);
        },
        error: () => alert('Error al crear publicación')
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
