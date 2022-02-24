import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  // @ 데코레이터
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
