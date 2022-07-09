import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Posts, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  hint:string
  description: string;
  title: string;
  bgColor:string;
  color:string;
  date: Date

  constructor(private postsService: PostsService, public dialog:MatDialog) { 
    this.hint = "Add a post-it"
    this.description = '';
    this.title = '';
    this.bgColor = '#ffffff';
    this.color = '#000000';
    this.date = new Date()
  }

  ngOnInit(): void {
  }

  sendNewCard(cardForm: Posts){
    // open modal pour saisir un titre et une shot description
    console.log("open Modal for add a card");
    this.postsService.addPostService(cardForm)
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '450px',
      disableClose: true,
      data: {
        title: this.title, 
        description: this.description, 
        date: this.date, 
        bgColor: this.bgColor, 
        color: this.color}
    });

     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       console.log(result)
       this.sendNewCard(result)
     });
  }

}



