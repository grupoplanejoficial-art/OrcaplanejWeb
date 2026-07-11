export abstract class BaseService {
  readonly moduleName: string;

  protected constructor(moduleName: string) {
    this.moduleName = moduleName;
  }
}
