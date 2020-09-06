import { Observable } from 'rxjs';
import { PostService } from './../post.service';
import { Article } from './../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // articles: Article[];
  articles$: Observable<Article[]>;

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.articles$ = this.postService
      .getArticles()
      .pipe(map(result => result.articles));

    /*
    this.postService.getArticles().subscribe(data => {
      this.articles = data.articles;
    });*/
  }

}
