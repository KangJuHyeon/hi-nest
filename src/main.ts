import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 파이프를 만들 거임 -> 유효성 검사용 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      // 타입스크립트 자체에서 코드에 대한 유효성 검사를 해주는 매우 좋은 아이
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 유저들이 보낸 것을 우리가 원하는 실제 타입으로 변환해준다.
    }),
  );
  await app.listen(3000);
}
bootstrap();
