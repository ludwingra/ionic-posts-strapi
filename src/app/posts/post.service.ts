import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(){
    return this.http.get('http://localhost:1337/posts');
  }

  getPostById(){}

  createPost(){}



  deletePost(){}
}
