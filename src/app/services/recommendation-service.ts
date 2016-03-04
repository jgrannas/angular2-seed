import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';
import {RecommendationModel} from "../models/recommendation-model";

@Injectable()
export class RecommendationService {
  constructor(private http: Http){}

  recommendations:[RecommendationModel] = [
    new RecommendationModel("teacher"),
    new RecommendationModel("teacher"),
    new RecommendationModel("counselor"),
    new RecommendationModel("other")
  ];
}
