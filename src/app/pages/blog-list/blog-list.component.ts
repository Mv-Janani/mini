import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor() { }
bloglist:any=[];
  ngOnInit(): void {
    this.bloglist=JSON.parse(localStorage.getItem('Bloglist')!)
  }

}
