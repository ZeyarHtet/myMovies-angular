// import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {

  constructor(
    private http: HttpClient
  ) { }

  _baseurl = "https://api.themoviedb.org/3/movie/";
  _apikey = "a92f28e11a27e8e5938a2020be68ba9c";

  getNowPlayingMovies() {
    return this.http.get(this._baseurl + 'now_playing?api_key=' + this._apikey + '&language=en-US')
  }

  getPopularMovies() {
    return this.http.get(this._baseurl + 'popular?api_key=' + this._apikey + '&language=en-US')
  }

  getTopRatedMovies() {
    return this.http.get(this._baseurl + 'top_rated?api_key=' + this._apikey + '&language=en-US')
  }

  
}

