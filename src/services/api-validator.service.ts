import { Injectable } from '@angular/core';
import * as sway from 'sway';

@Injectable()
export class ApiValidatorService {

  private schema: any;

  constructor(private url: string) {
    sway.create({ definition: url })
      .then((swaggerApi) => this.setSchema(swaggerApi))
      .catch((err) => console.log(err))
  }

  private setSchema(schema: any): void {
    this.schema = schema;
    if (!this.schema.validate()) {
      throw Error('Swagger definition is invalid');
    }
  }

  getSchema(): any {
    let ret = this.schema;
    return ret;
  }

  getPaths(): any[] {
    let schema = this.getSchema()
    return schema.getPaths();
  }

  getPath(route: string): any {
    return this.schema.getPath(route)
  }

  getOperations(): any[] {
    let schema = this.getSchema()
    return schema.getOperations()
  }

  getOperation(path: string): any {
    return this.schema.getPath(path)
  }
}
