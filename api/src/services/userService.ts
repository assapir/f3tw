import { Repository } from "typeorm";
import User from "../entity/user";
import BaseService from "./baseService";

export default class UserService extends BaseService<User> {
  constructor(repository: Repository<User>) {
    super(repository);
  }
}
