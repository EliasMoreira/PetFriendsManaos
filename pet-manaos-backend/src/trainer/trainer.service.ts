import { Injectable } from "@nestjs/common";
import { OutputTrainerDto } from "./dto/OutputTrainerDto.dto";
import { TrainerRepository } from "./trainer.repository";

@Injectable()
export class TrainerService {
  constructor(private repository: TrainerRepository) {}

  async getListTrainer(): Promise<OutputTrainerDto[]> {
    const listTrainer = await this.repository.findAll();

    return listTrainer.map((trainer) => {
      return new OutputTrainerDto(trainer.id, trainer.name, trainer.price, trainer.neighborhood);
    });
  }

  async findOneTrainer(id: number) {
    const trainer = await this.repository.findOne(id);
    console.log(trainer);
    return trainer;
  }

  async findAllreviews(id: number) {
    const review = await this.repository.findAllReviews(id);
    console.log(review);
    return review;
  }
}
