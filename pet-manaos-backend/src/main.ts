import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BaseErrorFilter } from "./filter/base-error.filter";
import { HttpExceptionFilter } from "./filter/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: /.*/ });
  app.useGlobalFilters(new HttpExceptionFilter(), new BaseErrorFilter());
  await app.listen(3000);
}
bootstrap();
