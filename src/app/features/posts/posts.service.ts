import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../core/interfaces/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_URL);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.API_URL}/${id}`);
  }

  createPost(post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<Post>(this.API_URL, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.API_URL}/${post.id}`, post);
  }

  deletePost(id: number): Observable<unknown> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
