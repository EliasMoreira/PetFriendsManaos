import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1752001556059 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "name", type: "varchar", isNullable: false },
          { name: "typeRegistration", type: "varchar", isNullable: false },
          { name: "price", type: "numeric", isNullable: true },
          { name: "neighborhood", type: "varchar", isNullable: false },
          { name: "phone", type: "varchar", isNullable: false },
          { name: "email", type: "varchar", isNullable: false },
          { name: "bio", type: "text", isNullable: true },
          {
            name: "viewsCount",
            type: "integer",
            isNullable: true,
            default: "0",
          },
          {
            name: "login",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "createdBy",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "deletedBy",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
