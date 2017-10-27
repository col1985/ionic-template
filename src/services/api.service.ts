import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class API {

  private baseURL: string;

  constructor(
    private http: Http
  ) {}

  private handleError(error: Response) {
    return Observable.throw(error.statusText)
  }

  private buildReqOpts(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let opts = new RequestOptions({ headers: headers });
    return opts;
  }

  private getUrl(path: string):string {
    return this.baseURL + path;
  }

  setBaseUrl(url: string): void {
    this.baseURL = url;
  }

  doGet(path: string): Observable<any[]> {
    return this.http.get(this.getUrl(path))
      .map((response: Response) => {
        return <any[]>response.json()
      })
      .catch(this.handleError);
  }

  /**
   * @param path
   * @param postBody
   */
  doPost(path: string, postBody: any): Observable<any[]> {
    return this.http.post(this.getUrl(path), postBody, this.buildReqOpts())
      .map((response: Response) => {
        return <any[]>response.json()
      })
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
