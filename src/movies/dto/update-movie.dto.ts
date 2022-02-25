import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDTO) {}

// 사람들이 보낼 수 있는거, 보냈으면 하는 걸 만들었다.
