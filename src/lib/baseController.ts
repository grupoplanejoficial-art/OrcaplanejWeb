export abstract class BaseController {
  readonly moduleName: string;

  protected constructor(moduleName: string) {
    this.moduleName = moduleName;
  }
}
