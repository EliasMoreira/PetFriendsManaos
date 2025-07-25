import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { DatabaseModule } from "./database/database.module";
import { TrainerModule } from "./trainer/trainer.module";

@Module({
  imports: [AuthModule, TrainerModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
