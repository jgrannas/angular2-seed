import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RecommendationModel} from '../../models/recommendation-model'
import {RecommendationService} from '../../services/recommendation-service'

@Component({
  selector: 'recommendations',
  templateUrl: 'app/components/recommendations/recommendations.html',
  styleUrls: ['app/components/recommendations/recommendations.css'],
  providers: [RecommendationService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Recommendations {
  recommendationModel:RecommendationModel = new RecommendationModel();
  constructor(public recommendationService:RecommendationService) {}

}
