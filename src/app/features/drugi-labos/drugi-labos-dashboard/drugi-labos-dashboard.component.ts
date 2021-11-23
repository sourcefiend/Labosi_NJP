import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-drugi-labos-dashboard',
  templateUrl: './drugi-labos-dashboard.component.html',
  styleUrls: ['./drugi-labos-dashboard.component.scss']
})
export class DrugiLabosDashboardComponent implements OnInit {

  public model: Post = {
    user: '',
    timestamp: new Date(),
    comment: ''
  }

  public showAddPost = true;
  public isEdit = false;

  public posts: Post[] = [
    {
      user: 'Mario Marić',
      comment: 'Moje ime je Mario i ovo je moj komentar.',
      timestamp: new Date("October 13, 2021 11:43:00")
    },
    {
      user: 'Dario Darić',
      comment: 'Moje ime je Dario i ovo je moj komentar.',
      timestamp: new Date("September 29, 2020 08:30:00")
    },
  ];

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService
  ) {
    
  }

  ngOnInit(): void {

  }

  public addPost(): void {
    this.showAddPost = !this.showAddPost;
  }

  public savePost(): void {
    this.posts.push(
      { user: this.model.user, timestamp: new Date(), comment: this.model.comment }
    )
  }

  public deletePost(post: Post): void {
    let elementIndex = this.posts.indexOf(post);
    this.posts.splice(elementIndex, 1);
  }
}
