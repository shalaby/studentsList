import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllNews() {
    return this.http.get(this.apiUrl);
  }

  getNewsById(id) {
   return this.http.get(this.apiUrl + id);
  }
}
