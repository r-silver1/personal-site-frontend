import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { CommentService } from './services/comment.service'
import { CommentGet } from './interfaces/comment-get'


@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styles: [
  ]
})
export class GuestsComponent implements OnInit {
  commentForm: any;
  commentList : CommentGet[] = [];

  constructor(private fb:FormBuilder, private commentService : CommentService,
              private router: Router) {
    this.commentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      msg: ['', [Validators.required]]
    })

   }

  ngOnInit(): void {
    this.commentService.getComments()
    .subscribe((res:any)=>{
      this.commentList = res;
    })
  }

  sendComment(): void{
    let newComment : CommentGet = {
      name: this.commentForm.value.name,
      email: this.commentForm.value.email,
      msg: this.commentForm.value.msg

    }
    this.commentService.postComment(newComment)
    .subscribe((res: any)=>{
      this.ngOnInit();
      this.commentForm.reset();
    });
  }

}
