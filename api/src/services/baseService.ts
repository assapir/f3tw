import { Repository } from "typeorm";

export default abstract class BaseService<T> {
  protected _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  async getAll(): Promise<Array<T>> {
    return this._repository.find();
  }

  create(entity: Partial<T>): Promise<T> {
    return this._repository.save(entity as T);
  }
}
