import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos = {
    nom : 'Kaira',
    email : 'kaira224@gmail.com',
    tel : '0645580641'
  };
  commentaires = [
    {dateCommentaire : Date(), message : 'Commentaire 1'},
    {dateCommentaire : Date(), message : 'Commentaire 2'},
    {dateCommentaire : Date(), message : 'Commentaire 3'}
  ];
  comment = {
    date : null,
    messageCommentaire : ''
  };

  constructor() { }

  ngOnInit() {
  }

  onAddCommentaire() {
    this.comment.date = new Date();
    this.commentaires.push(this.comment[0]);
    this.comment = {date : null, messageCommentaire : ''};
  }
}
