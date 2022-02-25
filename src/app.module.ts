import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  // @ 데코레이터
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
