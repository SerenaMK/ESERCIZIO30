import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import * as postSrv from '../../service/post.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
    posts: Post[] = [];

    constructor() {
        postSrv.getPosts().then(posts => this.posts = posts.filter (post => !post.active));
    }

    ngOnInit(): void {
    }

    onActivePost(id: number, i: number) {
        // postSrv.updatePost({active: true}, id);
        this.posts.splice(i, 1);
    }

}
