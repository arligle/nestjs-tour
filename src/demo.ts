import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';


@Controller()
class AppController {
  @Get('/nest')
  getRootRoute() {
    return 'hi! I am a single file nest-app';
  }
  @Get()
  getHello(): string {
    return 'Hello Word!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule { }



async function bootstrap() {

  // 创建一个nestjs实例，本质上它是一个http服务器+nestjs容器
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
