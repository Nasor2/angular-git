import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../../core/interfaces/post.interface';

@Component({
  standalone: true,
  selector: 'app-post-card',
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: Post;
  @Input() userName = '';
  @Output() view = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}
