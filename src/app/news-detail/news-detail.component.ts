import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news!: Observable<any>;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.news = this.newsService.getNewsById(id);
  }

}
