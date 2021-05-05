import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentGet } from '../interfaces/comment-get'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get('http://localhost:3003/api/comments')
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  postComment(newComment: CommentGet): Observable<any> {
    return this.http.post<object>('http://localhost:3003/api/comments', newComment)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
