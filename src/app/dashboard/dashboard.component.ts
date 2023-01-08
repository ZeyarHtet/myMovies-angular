import { Component } from '@angular/core';
import { GetmoviesService } from '../getmovies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    private getmovieservice: GetmoviesService
  ) { }

  popularMovies = [];
  nowPlayingMovies = [];
  topRatedMovies = [];
  ngOnInit(): void {
    this.getmovieservice.getPopularMovies().subscribe((response : any) => {
      this.popularMovies = response['results'];
      console.log(this.popularMovies);
    });
    this.getmovieservice.getNowPlayingMovies().subscribe((response : any) => {
      this.nowPlayingMovies = response['results'];
      console.log(this.nowPlayingMovies);
    });
    this.getmovieservice.getTopRatedMovies().subscribe((response : any) => {
      this.topRatedMovies = response['results'];
      console.log(this.topRatedMovies);
    });
  }
}
