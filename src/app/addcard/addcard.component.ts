import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  hint:string

  constructor(private postsService: PostsService) { 
    this.hint = "Add a post"
  }

  ngOnInit(): void {
  }

  openModalCard(){
    // open modal pour saisir un titre et une shot description
    console.log("open Modal for add a card");
    this.postsService.addPostService()
  }
}
