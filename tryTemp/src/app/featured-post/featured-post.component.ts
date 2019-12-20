import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {

  posts=[
    {category:"Food",subCategory:"Dessert",title:"Tasty & Delicious Foods1",date:"March 01, 2018",img:"blog-1.jpg","link":"single.html"},
    {category:"Food",subCategory:"Drinks",title:"Tasty & Delicious Foods2",date:"March 02, 2018",img:"blog-2.jpg","link":"single.html"},
    {category:"Food",subCategory:"Dinner",title:"Tasty & Delicious Foods3",date:"March 03, 2018",img:"blog-3.jpg","link":"single.html"},
    {category:"Food",subCategory:"Dessert",title:"Tasty & Delicious Foods1",date:"March 01, 2018",img:"blog-1.jpg","link":"single.html"},
    {category:"Food",subCategory:"Drinks",title:"Tasty & Delicious Foods2",date:"March 02, 2018",img:"blog-2.jpg","link":"single.html"},
    {category:"Food",subCategory:"Dinner",title:"Tasty & Delicious Foods3",date:"March 03, 2018",img:"blog-3.jpg","link":"single.html"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
