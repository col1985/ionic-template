import { async } from '@angular/core/testing';

import { API } from './api.provider'

describe('API Service', () => {

  const baseUrl: string = 'http://www.google.ie';
  let api: any;

  beforeEach(async(() => {
    api = API;
    console.log(api)
  }))

  it('should return an instance of the API Service', (done: DoneFn) => {
    expect(api).toBeDefined();
    done();
  });

  // it('should return api of the targeted API schema', (done: DoneFn) => {
  //   let schema = api.getSchema();
  //   expect(schema).toBeDefined();
  //   done();
  // });

  // it('should return array of defined paths', (done: DoneFn) => {
  //   let paths = api.getPaths();
  //   expect(paths).toBeDefined();
  //   expect(paths.length > 0).toBeTruthy();
  //   done();
  // });

  // it('should return valid pathObject', (done: DoneFn) => {
  //   let pathObject = api.getPath('/pet', 'get');
  //   console.log(pathObject)
  //   expect(pathObject).toBeDefined();
  //   // expect(paths.length > 0).toBeTruthy();
  //   done();
  // });

  //   it('should return api of the targeted API schema', () => {
  //     schema = api.getSchema();
  //     expect(schema).toBeDefined();
  //   });

  //   // it('should return definied api of the API schema', () => {
  //   //   schema = api.getSchema();
  //   //   expect(schema).toBeDefined();
  //   // });
});
