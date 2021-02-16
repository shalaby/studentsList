import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news!: Observable<any>;

  constructor(private newService: NewsService) {}

  ngOnInit(): void {
    this.news = this.newService.getAllNews();
  }

}
