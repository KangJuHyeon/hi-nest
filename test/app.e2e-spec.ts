import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(); // 어플리케이션을 생성하고 있다. 그래서 테스트할땐 pipe 구축도 다시 해줘야한다.
    app.useGlobalPipes(
      new ValidationPipe({
        // 타입스크립트 자체에서 코드에 대한 유효성 검사를 해주는 매우 좋은 아이
        whitelist: true, // 환경 일치시키기 (main.ts 참고)
        forbidNonWhitelisted: true,
        transform: true, // 유저들이 보낸 것을 우리가 원하는 실제 타입으로 변환해준다.
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/') // 엔드포인트
      .expect(200) // status code
      .expect('Welcom to my Movie API'); // res
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    // 서버에 request해서 movies에 post할 때 이 정보를 보내면 201을 받는지 테스트하는거야
    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'Test',
          year: 2000,
          genres: ['test'],
        })
        .expect(201);
    });

    it('POST 400', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({
          title: 'Test',
          year: 2000,
          genres: ['test'],
          other: 'thing',
        })
        .expect(400);
    });

    // 404가 잘나오는 것을 확인
    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });

    describe('/movies/:id', () => {
      it('GET 200', () => {
        return request(app.getHttpServer()).get('/movies/1').expect(200);
      });

      it('GET 404', () => {
        return request(app.getHttpServer()).get('/movies/999').expect(404);
      });

      it('PATCH 200', () => {
        return request(app.getHttpServer())
          .patch('/movies/1')
          .send({
            title: 'Test',
            year: 2000,
            genres: ['test'],
          })
          .expect(200);
      });

      it('DELETE 200', () => {
        return request(app.getHttpServer()).delete('/movies/1').expect(200);
      });
    });
  });
});
