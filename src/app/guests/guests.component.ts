import { Component, OnInit } from '@angular/core';
import { CommentService } from './services/comment.service'
import { CommentGet } from './interfaces/comment-get'

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styles: [
  ]
})
export class GuestsComponent implements OnInit {

  commentList : CommentGet[] = [];

  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments()
    .subscribe((res:any)=>{
      this.commentList = res;
    })
  }

}
