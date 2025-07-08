import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../core/interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
