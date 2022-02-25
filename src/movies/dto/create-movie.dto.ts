import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  @IsString({ each: true }) // 문자열 배열에 담겨있기 때문에 모든 요소를 순회하면서 검사한다.
  readonly genres: string[];
}

// 사람들이 보낼 수 있는거, 보냈으면 하는 걸 만들었다.
