import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentGet } from '../interfaces/comment-get'

let apiPath:string = 'http://backend.robertsilver.codes/api/comments';

@Injectable({
  providedIn: 'root'
})


export class CommentService {


  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get(apiPath)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  postComment(newComment: CommentGet): Observable<any> {
    return this.http.post<object>(apiPath, newComment)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
