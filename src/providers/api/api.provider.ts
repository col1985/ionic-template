import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class API {

  private baseUrl: string;

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

  private getUrl(path: string): string {
    return this.baseUrl + path;
  }

  public setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  /**
   * doGet
   * @param path
   * @param params
   */

  doGet(path: string, params: string): Observable<any[]> {
    let reqUrl: string = this.getUrl(path);

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
    let reqUrl: string = this.getUrl(path);
    let opts: any = this.buildReqOpts();

    return this.http.post(reqUrl, postBody, opts)
      .map((res: Response) => <any[]>res.json())
      .catch(this.handleError);
  }

  /**
   * @param path
   */
  doPut(path: string, putBody: any): Observable<any[]>  {
    let reqUrl: string = this.getUrl(path);
    let opts: any = this.buildReqOpts();

    return this.http.put(reqUrl, putBody, opts)
      .map((response: Response) => {
        return <any[]>response.json()
      })
      .catch(this.handleError);
  }

  /**
   * @param path
   */
  doDelete(path: string): Observable<any[]>  {
    let reqUrl: string = this.getUrl(path);

    return this.http.delete(reqUrl)
      .map((response: Response) => {
        return <any[]>response.json()
      })
      .catch(this.handleError);
  }
}
