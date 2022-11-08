import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable()
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http
            .post<{ name: string }>('https://poi-angular-course-default-rtdb.firebaseio.com/posts.json',
                postData
            ).subscribe(responseData => {
                console.log(responseData);
            },
            error => {
                this.error.next(error.message);
            })
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        return this.http
            .get<{ [key: string]: Post }>('https://poi-angular-course-default-rtdb.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({"Custom-Header": 'Hello'}),
                params: searchParams
            })
            .pipe(map(responseData => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key })
                    }
                }
                return postsArray;
            }),
            catchError(errorRes => {
                //send to analytics server
                return throwError(errorRes);
            })
        );
    }

    clearPosts() {
        return this.http.delete('https://poi-angular-course-default-rtdb.firebaseio.com/posts.json');
    }

}