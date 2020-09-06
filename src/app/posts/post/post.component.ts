import { Article } from './../../interfaces/article';
import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  article: Article;

  constructor(private route: ActivatedRoute, private postService: PostService) {

   }

  ngOnInit(): void {
    this.route.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        switchMap(id => this.postService.getArticle(id))
      ).subscribe(data => {
        this.article = data.article;
      });
  }

}
