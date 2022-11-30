import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import * as postSrv from '../../service/post.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
    posts: Post[] = [];

    constructor() {
    }

    ngOnInit(): void {
        postSrv.getPosts().then(posts => this.posts = posts);
    }

    onInactivePost(id: number, i: number) {
        // postSrv.updatePost({active: false}, id);
        this.posts.splice(i, 1);
    }
}
