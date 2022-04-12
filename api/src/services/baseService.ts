import { Repository } from "typeorm";

export default abstract class BaseService<T> {
  protected _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }
}
