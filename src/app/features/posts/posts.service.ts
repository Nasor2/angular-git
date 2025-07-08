import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, CreatePostRequest, UpdatePostRequest } from '../../core/interfaces/post.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  createPost(post: CreatePostRequest): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  updatePost(id: number, post: UpdatePostRequest): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
