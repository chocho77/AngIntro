import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  title:string = "Lists of Posts";

  @Input()
  fromParent!: string;

  constructor(){}


  ngOnInit(): void {
    
  }

}
