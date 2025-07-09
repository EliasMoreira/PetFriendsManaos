import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedInsertIntoTrainer1752004090169 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "user" 
        (name, "typeRegistration", price, neighborhood, phone, email, bio, "viewsCount", login, password, "createdAt", "createdBy", "updatedAt", "deletedAt", "deletedBy")
      VALUES
        ('João Silva', 'trainer', 100, 'Centro', '11999999999', 'joao@email.com', 'Adestrador profissional com mais de 5 anos de experiência no comportamento canino, especializado em adestramento positivo, socialização e reabilitação de cães com traumas ou comportamentos agressivos. Trabalho com todas as raças e idades, sempre priorizando o bem-estar animal e a construção de uma relação de confiança entre tutor e cão.

Atendo a domicílio em Manaus e ofereço também consultorias online. Meu objetivo é transformar a convivência com seu cão em algo leve, harmonioso e cheio de aprendizado mútuo', 10, 'joaos', 'senha123', now(), null, now(), null, null),
        ('Maria Santos', 'trainer', 250, 'Adrianópolis', '11888888888', 'maria@email.com', 'Adestrador profissional com mais de 5 anos de experiência no comportamento canino, especializado em adestramento positivo, socialização e reabilitação de cães com traumas ou comportamentos agressivos. Trabalho com todas as raças e idades, sempre priorizando o bem-estar animal e a construção de uma relação de confiança entre tutor e cão.

Atendo a domicílio em Manaus e ofereço também consultorias online. Meu objetivo é transformar a convivência com seu cão em algo leve, harmonioso e cheio de aprendizado mútuo', 23, 'marias', 'senha456', now(), null, now(), null, null),
        ('Carlos Pereira', 'trainer', 150, 'Cidade Nova', '11777777777', 'carlos@email.com', 'Adestrador profissional com mais de 5 anos de experiência no comportamento canino, especializado em adestramento positivo, socialização e reabilitação de cães com traumas ou comportamentos agressivos. Trabalho com todas as raças e idades, sempre priorizando o bem-estar animal e a construção de uma relação de confiança entre tutor e cão.

Atendo a domicílio em Manaus e ofereço também consultorias online. Meu objetivo é transformar a convivência com seu cão em algo leve, harmonioso e cheio de aprendizado mútuo', 5, 'carlosp', 'senha789', now(), null, now(), null, null),
        ('Ana Oliveira', 'trainer', 80, 'Aleixo', '11666666666', 'ana@email.com', 'Adestrador profissional com mais de 5 anos de experiência no comportamento canino, especializado em adestramento positivo, socialização e reabilitação de cães com traumas ou comportamentos agressivos. Trabalho com todas as raças e idades, sempre priorizando o bem-estar animal e a construção de uma relação de confiança entre tutor e cão.

Atendo a domicílio em Manaus e ofereço também consultorias online. Meu objetivo é transformar a convivência com seu cão em algo leve, harmonioso e cheio de aprendizado mútuo', 12, 'anao', 'senha321', now(), null, now(), null, null),
        ('Lucas Lima', 'trainer', 300, 'Parque 10 de Novembro', '11555555555', 'lucas@email.com', 'Adestrador profissional com mais de 5 anos de experiência no comportamento canino, especializado em adestramento positivo, socialização e reabilitação de cães com traumas ou comportamentos agressivos. Trabalho com todas as raças e idades, sempre priorizando o bem-estar animal e a construção de uma relação de confiança entre tutor e cão.

Atendo a domicílio em Manaus e ofereço também consultorias online. Meu objetivo é transformar a convivência com seu cão em algo leve, harmonioso e cheio de aprendizado mútuo', 35, 'lucasl', 'senha654', now(), null, now(), null, null),
('Joao das Neves', 'tutor', null, 'Flores', '92988452147', 'tutor@gmail.com', null, null, 'neve', 'neve', now(), null, now(), null, null)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user" WHERE login IN ('joao', 'maria', 'carlos', 'ana', 'lucas');
    `);
  }
}
