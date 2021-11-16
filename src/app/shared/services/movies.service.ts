import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

    private movies!: Movie[];
    
    public movieAdded = new EventEmitter();

    constructor(private http: HttpClient) {
        this.fetchMovies().then((fetchedMovies: any) => {
            this.movies = fetchedMovies.map((movie: any) => {
                // HACK: zašto se ovo samo ne mapira ako pridodjeljuje modelu (type coercion??)
               movie.year = parseInt(movie.year, 10);
               movie.rating = parseFloat(movie.rating);
               return movie;
            });
        })
    }

    fetchMovies() {
        return this.http.get('https://bridge.hr/ipw/imdb.json')
            .toPromise()
            .then(movies => <Movie[]> movies)
            .then(movies => { return movies; })
    }

    addMovie(movie: Movie): void {
        const maxIndex = Math.max(...this.movies.map(movie => movie.index.valueOf()));
        movie.index = maxIndex + 1;
        this.movies.push(movie);
        this.movieAdded.emit();
    }

    deleteMovie(movie: Movie): void {
        const index = this.movies.indexOf(movie);
        if (index > -1) {
            this.movies.splice(index, 1);
        }
    }

    getMovies(): Movie[] {
        return this.movies;
    }
}