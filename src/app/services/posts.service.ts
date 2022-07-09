import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Posts{
  id: number, 
  title: string, 
  description:string, 
  bgColor:string, 
  color:string, 
  date: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject()
  posts:Array<Posts> = []

  constructor() {
    let postsItemSession = sessionStorage.getItem('posts')
   // console.log(postsItemSession);
    
    if(postsItemSession != null){
      this.posts = JSON.parse(postsItemSession)
    }
  }

  addPostService(newCard: Posts){
    this.posts.push({id: this.posts.length + 1, 
                     title: newCard.title, 
                     description:newCard.description, 
                     bgColor:newCard.bgColor, 
                     color:newCard.color, 
                     date: newCard.date
                  })
    sessionStorage.setItem('posts', JSON.stringify(this.posts))
    this.getPostService()
  }

  getPostService(){
    let postsItemSession = sessionStorage.getItem('posts')
    if(postsItemSession != null){
      this.posts = JSON.parse(postsItemSession)
    }
    this.postsSubject.next(this.posts)
  }

  deletePostService(post:Posts){
    let id = post.id
    for (var i = this.posts.length - 1; i >= 0; i--) {
      //console.log(this.posts[i]);
      if (this.posts[i].id === id) {
        this.posts.splice(i, 1);
      }
     }
    sessionStorage.setItem('posts', JSON.stringify(this.posts))
    this.getPostService()
  }

  updatePostService(post:Posts){
    console.log(post);
    
    let id = post.id
    for (var y = this.posts.length - 1; y >= 0; y--) {
      console.log(this.posts[y]);
      if (this.posts[y].id === id) {
        this.posts[y].title = post.title
        this.posts[y].description = post.description
        this.posts[y].color = post.color
        this.posts[y].bgColor = post.bgColor
        this.posts[y].date = post.date
      }else{
        console.log('Aucun correspondant');
        
      }
     }
    sessionStorage.setItem('posts', JSON.stringify(this.posts))
    this.getPostService()
  }
}
