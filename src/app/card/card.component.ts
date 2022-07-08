import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  posts: any
  postsSubscribtion: Subscription;

  constructor(private postsService:PostsService) { 

    this.postsSubscribtion =  this.postsService.postsSubject.subscribe((data)=>{
      console.log(data);
      this.posts = data
      
    })
  }
  
  ngOnInit() {
    this.postsService.getPostService()
    console.log(this.posts);
    
  }

  updatePost(myPost:any){
    console.log(myPost);
    this.postsService.updatePostService(myPost)
  }

  deletePost(myPost:any){
    console.log(myPost);
    this.postsService.deletePostService(myPost);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postsSubscribtion.unsubscribe()
  }

}
