import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
} from "typeorm";
import User from "./user";

export enum FeatureType {
  TOGGLE = "toggle",
  PERCENTAGE = "percentage",
}

@Entity("features")
export default class Feature {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({
    nullable: false,
    type: "enum",
    enum: FeatureType,
    default: FeatureType.TOGGLE,
  })
  type: FeatureType;

  @ManyToMany(() => User, (user) => user.id)
  users: User[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
