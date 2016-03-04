import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';
import {MockableModel} from "../models/mockable-model";

@Injectable()
export class MockableService {
  constructor(private http: Http){}

  getList(){
    return this.makeRequest(`angular2test`);
  }

  //getReposForOrg(org:string){
  //  return this.makeRequest(`orgs/${org}/repos`);
  //}
  //
  //getRepoForOrg(org:string, repo:string){
  //  return this.makeRequest(`repos/${org}/${repo}`);
  //}

  private makeRequest(path: string){
    //let params = new URLSearchParams();
    //params.set('per_page', '100');
    let url = `https://demo9104995.mockable.io/${path}`;
    return this.http.get(url)
      .map((res) => res.json());
  }
}
