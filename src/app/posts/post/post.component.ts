import { Article } from './../../interfaces/article';
import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // article: Article;
  article$: Observable<Article>;

  constructor(private route: ActivatedRoute, private postService: PostService) {

   }

  ngOnInit(): void {
    this.article$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      switchMap(id => this.postService.getArticle(id)),
      map(result => result.article),
      shareReplay(1)
    );
    /*
    this.route.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        switchMap(id => this.postService.getArticle(id))
      ).subscribe(data => {
        this.article = data.article;
      });*/
  }

}
