import { ApiValidatorService } from './api-validator.service';
import { async } from '@angular/core/testing';

describe('API Validator Service', () => {

  const baseUrl: string = 'http://petstore.swagger.io/v2';
  let swaggerApi: any;

  beforeEach(async(() => {
    swaggerApi = new ApiValidatorService(baseUrl + '/swagger.yaml');
  }))

  it('should return a swaggerApi of the api-validator', (done: DoneFn) => {
    expect(swaggerApi).toBeDefined();
    done();
  });

  it('should return swaggerApi of the targeted API schema', (done: DoneFn) => {
    let schema = swaggerApi.getSchema();
    expect(schema).toBeDefined();
    done();
  });

  it('should return array of defined paths', (done: DoneFn) => {
    let paths = swaggerApi.getPaths();
    expect(paths).toBeDefined();
    expect(paths.length > 0).toBeTruthy();
    done();
  });

  it('should return valid pathObject', (done: DoneFn) => {
    let pathObject = swaggerApi.getPath('/pet', 'get');
    console.log(pathObject)
    expect(pathObject).toBeDefined();
    // expect(paths.length > 0).toBeTruthy();
    done();
  });

  //   it('should return swaggerApi of the targeted API schema', () => {
  //     schema = swaggerApi.getSchema();
  //     expect(schema).toBeDefined();
  //   });

  //   // it('should return definied swaggerApi of the API schema', () => {
  //   //   schema = swaggerApi.getSchema();
  //   //   expect(schema).toBeDefined();
  //   // });
});
