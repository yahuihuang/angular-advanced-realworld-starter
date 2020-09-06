import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  post = this.formbuilder.group({
    title: this.formbuilder.control('', Validators.required),
    description: this.formbuilder.control(''),
    body: this.formbuilder.control('',
                    [ Validators.required, Validators.minLength(20) ]),
    tags: this.formbuilder.array([
      this.formbuilder.control('Angular'),
      this.formbuilder.control('HTML'),
      this.formbuilder.control('CSS')
    ]),
  });

  constructor(private formbuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  get title(): FormControl {
    return this.post.get('title') as FormControl;
  }

  get body(): FormControl {
    return this.post.get('body') as FormControl;
  }

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  addTag(tag: string): void {
    if (tag.trim().length <= 0) {
      return;
    }

    this.tags.push(
      this.formbuilder.control(tag)
    );
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  createPost(): void {
    console.log(this.post.value);
    this.postService.createArticle(this.post.value).subscribe(result => {
      this.router.navigateByUrl('/');
    });
  }
}
