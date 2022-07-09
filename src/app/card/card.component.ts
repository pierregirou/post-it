import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Posts, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  posts: any
  postsSubscribtion: Subscription;

  constructor(private postsService:PostsService, private dialog:MatDialog) { 

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
    // console.log(myPost);
    // this.postsService.updatePostService(myPost)
    this.openDialog(myPost)
  }

  openDialog(myPost:Posts): void {
    const dialogRefUpdate = this.dialog.open(PopUpComponent, {
      width: '450px',
      disableClose: true,
      data: {
        id: myPost.id,
        title: myPost.title, 
        description: myPost.description, 
        date: myPost.date, 
        bgColor: myPost.bgColor, 
        color: myPost.color}
    });
    dialogRefUpdate.afterClosed().subscribe(result => {
      console.log('The dialog was closed for updating');
      this.postsService.updatePostService(result)
    });
  }
  

  deletePost(myPost:any){
    // console.log(myPost);
    this.postsService.deletePostService(myPost);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postsSubscribtion.unsubscribe()
  }

}
