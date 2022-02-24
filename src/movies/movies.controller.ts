import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies') // 엔트리 포인트를 관리해준다 이 부분이
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') seachingYear: string) {
    return `We are searching for a movie made after: ${seachingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    // 데코레이터 Param을 안주게되면 id값은 undefined로 출력된다.
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
}
