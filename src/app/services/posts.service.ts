import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject()
  constructor() { }

  posts:Array<object> = [
    {title:"titre 1", shortDescription:" voici la short description 1"},
    {title:"titre 2", shortDescription:" voici la short description 2"},
    {title:"titre 3", shortDescription:" voici la short description 3"},
    {title:"titre 4", shortDescription:" voici la short description 4"},
    {title:"titre 5", shortDescription:" voici la short description 5"},
    {title:"titre 6", shortDescription:" voici la short description 6"},
  ]


  addPostService(){
    this.posts.push({title:"titre 7", shortDescription:" voici la short description 8"})
    this.getPostService()
  }

  getPostService(){
    this.postsSubject.next(this.posts)
  }

  deletePostService(post:any){
    console.log(post);
    
  }

  updatePostService(post:any){
    console.log(post);
    
  }
}
