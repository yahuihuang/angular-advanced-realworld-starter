import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  post = this.formbuilder.group({
    title: this.formbuilder.control(''),
    description: this.formbuilder.control(''),
    body: this.formbuilder.control(''),
    tags: this.formbuilder.array([
      this.formbuilder.control('Angular'),
      this.formbuilder.control('HTML'),
      this.formbuilder.control('CSS')
    ]),
  });

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
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
  }
}
