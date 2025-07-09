import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { TrainerController } from "./trainer.controller";
import { TrainerProviders } from "./trainer.provider";
import { TrainerRepository } from "./trainer.repository";
import { TrainerService } from "./trainer.service";

@Module({
  imports: [DatabaseModule],
  controllers: [TrainerController],
  providers: [...TrainerProviders, TrainerService, TrainerRepository],
})
export class TrainerModule {}
