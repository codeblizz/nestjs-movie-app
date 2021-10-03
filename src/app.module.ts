import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    MovieModule, 
    TypeOrmModule.forRoot({
      type: "postgres",
      database: "NestJs-Movie-App",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "wellness29",
      autoLoadEntities: true,
      synchronize: true
    })
  ], 
})
export class AppModule {}
