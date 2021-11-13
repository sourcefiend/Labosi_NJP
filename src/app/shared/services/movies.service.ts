import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }

    getMovies() {
        return this.http.get('https://bridge.hr/ipw/imdb.json')
            .toPromise()
            .then(movies => <Movie[]> movies)
            .then(movies => { return movies; })
    }
}