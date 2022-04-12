import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { FeatureType } from "../entity/feature";

const usersTable = new Table({
  name: "users",
  columns: [
    {
      name: "id",
      type: "uuid",
      isPrimary: true,
      isGenerated: true,
      generationStrategy: "uuid",
    },
    {
      name: "email",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "created_at",
      type: "timestamp with time zone",
      isNullable: false,
      default: "now()",
    },
    {
      name: "updated_at",
      type: "timestamp with time zone",
      isNullable: false,
      default: "now()",
    },
    {
      name: "deleted_at",
      type: "timestamp with time zone",
    },
  ],
});

const featuresTable = new Table({
  name: "features",
  columns: [
    {
      name: "id",
      type: "uuid",
      isPrimary: true,
      isGenerated: true,
      generationStrategy: "uuid",
    },
    {
      name: "name",
      type: "varchar",
      isNullable: false,
    },
    {
      name: "type",
      type: "enum",
      isNullable: false,
      default: `'${FeatureType.TOGGLE}'`,
      enum: [FeatureType.TOGGLE, FeatureType.PERCENTAGE],
      enumName: "feature_type",
    },
    {
      name: "created_at",
      type: "timestamp with time zone",
      isNullable: false,
      default: "now()",
    },
    {
      name: "updated_at",
      type: "timestamp with time zone",
      isNullable: false,
      default: "now()",
    },
    {
      name: "deleted_at",
      type: "timestamp with time zone",
    },
  ],
});

export class InitialDBSchema1649761114244 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(usersTable, true, true, true);
    await queryRunner.createTable(featuresTable, true, true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable(usersTable);
  }
}
