import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { OutputTrainerDto } from "./dto/OutputTrainerDto.dto";
import { TrainerService } from "./trainer.service";

@Controller("trainer")
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Get()
  getListTrainer(): Promise<OutputTrainerDto[]> {
    return this.trainerService.getListTrainer();
  }

  @Get(":id")
  findOneTrainer(@Param("id", ParseIntPipe) trainerId: number) {
    return this.trainerService.findOneTrainer(trainerId);
  }

  @Get("/reviews/:id")
  findAllReviews(@Param("id", ParseIntPipe) trainerId: number) {
    return this.trainerService.findAllreviews(trainerId);
  }
}
