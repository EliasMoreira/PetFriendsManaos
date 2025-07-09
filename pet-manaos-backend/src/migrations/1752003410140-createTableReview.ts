import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableReview1752003410140 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "review",
        columns: [
          { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "userId", type: "integer", isNullable: false },
          { name: "tutor", type: "varchar", isNullable: false },
          { name: "content", type: "varchar", isNullable: false },
          { name: "type", type: "varchar", isNullable: false },
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

    await queryRunner.createForeignKey(
      "review",
      new TableForeignKey({
        name: "fk_user_review",
        columnNames: ["userId"],
        referencedTableName: "user",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("review", "fk_user_review");
    await queryRunner.dropTable("review");
  }
}
