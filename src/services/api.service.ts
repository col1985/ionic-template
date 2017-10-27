import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiValidatorService } from './api-validator.service';

@Injectable()
export class API {

  private baseUrl: string = 'http://petstore.swagger.io/v2';
  private swaggerFile: string = this.baseUrl + '/swagger.yaml';
  private apiVs: ApiValidatorService;

  constructor(
    private http: Http
  ) {
    this.apiVs = new ApiValidatorService(this.swaggerFile);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText)
  }

  private buildReqOpts(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let opts = new RequestOptions({ headers: headers });
    return opts;
  }

  private getUrl(path: string): string {
    return this.baseUrl + path;
  }

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  /**
   * doGet
   * @param path
   * @param params
   */

  doGet(path: string, params: string): Observable<any[]> {
    let reqUrl: string = this.getUrl(path)
    let pathObj = this.apiVs.getPath(path, '/get')

    this.apiVs.validatePath(reqUrl, path, '/get')
    pathObj.api.validate()


    return this.http.get(reqUrl + params)
      .map((res: Response) => {
        return <any[]>res.json()
      })
      .catch(this.handleError);
  }

  /**
   * @param path
   * @param postBody
   */
  doPost(path: string, postBody: any): Observable<any[]> {
    let reqUrl: string = this.getUrl(path)
    let opts: any = this.buildReqOpts()
    // let pathObj = this.apiVs.getPath(path, '/post')
    this.apiVs.validatePostReq(postBody, path, '/post')
    debugger

    return this.http.post(reqUrl, postBody, opts)
      .map((res: Response) => <any[]>res.json())
      .catch(this.handleError);
  }

  /**
   * @param path
   */
  // doPut(path: string, putBody: any): Observable<any[]>  {
  //   return this.http.put(this.getUrl(path), putBody, this.buildReqOpts())
  //     .map((response: Response) => {
  //       return <any[]>response.json()
  //     })
  //     .catch(this.handleError);
  // }

  /**
   * @param path
   */
  // doDelete(path: string): Observable<any[]>  {
  //   return this.http.delete(this.getUrl(path))
  //     .map((response: Response) => {
  //       return <any[]>response.json()
  //     })
  //     .catch(this.handleError);
  // }
}
