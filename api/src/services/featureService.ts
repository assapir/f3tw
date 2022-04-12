import { Repository } from "typeorm";
import Feature from "../entity/feature";
import BaseService from "./baseService";

export default class FeatureService extends BaseService<Feature> {
  constructor(repository: Repository<Feature>) {
    super(repository);
  }
}
