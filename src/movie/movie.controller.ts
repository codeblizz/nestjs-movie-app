import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { genre, movieModel, rating } from './movie.model';
import { MovieService } from './movie.service';

@Controller('films')
export class MovieController {
    constructor(private movieService: MovieService) {};

    @Get("/")
    getMovies() : movieModel[] {
        return this.movieService.getMovies();
    }

    @Get("/:id")
    getMovieById(@Param("id") id: string) : movieModel {
        return this.movieService.getMovieById(id)
    }

    @Post("/film")
    createMovies(
        @Body("name") name: string,
        @Body("description") description: string,
        @Body("release_date") release_date: Date,
        @Body("ticket_price") ticket_price: BigInt,
        @Body("country") country: string,
        @Body("photo") photo: string

    ) : movieModel {
        return this.movieService.createMovie(
            uuid(),
            name,
            description,
            release_date,
            rating.RATING_5,
            ticket_price,
            country,
            genre.ACTION,
            photo
        )
    }

    @Patch("/:id/genre") 
    updateMovieGenre(
        @Param("id") id: string,
        @Body("genre") genre: genre.DRAMA
    ) : movieModel {
        return this.movieService.updateMovieGenre(id, genre)
    }

    @Delete("/:id")
    deleteMovieById(@Param("id") id:string) : void {
        return this.movieService.deleteMovieById(id)
    }
}
