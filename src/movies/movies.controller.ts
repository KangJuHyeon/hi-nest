import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies') // 엔트리 포인트를 관리해준다 이 부분이
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    // 데코레이터 Param을 안주게되면 id값은 undefined로 출력된다.
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
}
