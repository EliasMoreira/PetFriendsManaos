import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedReviews1752017369842 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "review" 
        ("userId", "tutor","content", "type", "createdAt", "createdBy", "updatedAt", "deletedAt", "deletedBy")
      VALUES 
        (1, 'Joao das Neves', 'Ótimo atendimento e profissionalismo.', 'positive', now(), null, now(), null, null),
        (1, 'Joao das Neves', 'Ótimo atendimento.', 'positive', now(), null, now(), null, null),
        (2, 'Joao das Neves', 'Poderia melhorar a pontualidade.', 'negative', now(), 'admin', now(), null, null),
        (2, 'Joao das Neves', 'Ótimo atendimento.', 'positive', now(), null, now(), null, null);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
