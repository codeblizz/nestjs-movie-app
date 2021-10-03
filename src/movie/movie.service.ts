import { Injectable } from '@nestjs/common';
import { movieModel, genre, rating } from './movie.model';

@Injectable()
export class MovieService {
    private movies : movieModel[] = [];

    getMovies() : movieModel[] {
        return this.movies;
    }

    getMovieById(id: string) : movieModel {
        return this.movies.find(movie => movie.id == id)
    }

    createMovie(
        id: string,
        name: string, 
        description: string,
        release_date: Date,
        rating: rating,
        ticket_price: BigInt,
        country: string,
        genre: genre,
        photo: string
    ) {
        const movie : movieModel = {
            id,
            name, 
            description,
            release_date,
            rating,
            ticket_price,
            country,
            genre,
            photo
        }
        this.movies.push(movie)
        return movie;
    }

    deleteMovieById(id: string) : void {
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    updateMovieGenre(id: string, genre: genre) {
        const mov = this.getMovieById("id");
        mov.genre = genre;
        return mov;
    }

}
