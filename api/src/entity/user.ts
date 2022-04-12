import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import Feature from "./feature";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  email: string;

  @ManyToMany(() => Feature, (feature) => feature.id)
  @JoinTable({ name: "users_features" })
  features: Feature[];

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp with time zone" })
  deletedAt: Date;
}
