import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/News.component';

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: ':id', component: NewsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
