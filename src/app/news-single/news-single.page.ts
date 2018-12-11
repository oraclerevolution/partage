import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  article;
  todo = {
    comment:""
  }
  actualites: any;
  constructor(private rest: NewsService, private http: HttpClient, private router: Router) {
    this.actus();
   }
   
   logForm(){
    // let formdata = new FormData;
    // formdata.append('comment', this.todo.comment);
    // this.http.post(this.rest.apiUrl+'/comment', formdata).subscribe((data) => {
    //   console.log(data);
    // })
    console.log(this.todo);
   }

  ngOnInit() {
    this.article = this.rest.currentArticle;
    console.log(this.rest.currentArticle);
  }
  goBack(){
    this.router.navigate(['/home']);
  }

  actus(){
    this.rest.getActu()
    .then(data => {
      this.actualites = data;
      console.log(this.actualites);
    })
  }

}
