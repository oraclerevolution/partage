import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  actualites: any;
  constructor(private router: Router, private rest: NewsService){
    this.actus();
  }

  actus(){
    this.rest.getActu()
    .then(data => {
      this.actualites = data;
      console.log(this.actualites);
    })
  }

  
  goTo(article){
    this.rest.currentArticle = article;
    this.router.navigate(['/news-single']);
  }
}
