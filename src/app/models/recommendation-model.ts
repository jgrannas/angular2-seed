export class RecommendationModel {
  first_name:string = "";
  last_name:string = "";
  email:string = "";
  //recommendation_type:string = "";

  constructor(public recommendation_type:string = "") {}
}
