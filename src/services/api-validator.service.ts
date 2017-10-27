import { Injectable } from '@angular/core';
import * as sway from 'sway';

@Injectable()
export class ApiValidatorService {

  private schema: any;

  constructor(private url: string) {
    sway.create({ definition: url })
      .then((swaggerApi) => {
        this.setSchema(swaggerApi)
      })
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

  getPath(route: string, method: string): any {
    let schema = this.getSchema()
    return schema.getPath(route, method)
  }

  validatePath(uri: string, route: string, method: string) {
    let schema = this.getSchema()
    let path = schema.getPath(route, method)
    path.api.validate();
    path.getOperations().forEach(op => {
      console.log(op)
    });
  }

  validatePostReq(body: any, path: string, method: string) {
    let schema: any = this.getSchema()
    let pathObj: any = schema.getPath(path, method)

    console.log(pathObj.api.validate());


    pathObj.getOperations().forEach(op => {
      // console.log(op.validateRequest({ body: body }))
      let result = op.validateRequest({ body: body });
      if (result && result.errors.length > 0) {
        return false;
      } else {
        result.warnings.forEach((msg) => console.warn(msg))
      }
    });
  }

  getOperations(): any[] {
    let schema = this.getSchema()
    return schema.getOperations()
  }

  getOperation(path: string): any {
    return this.schema.getPath(path)
  }
}
