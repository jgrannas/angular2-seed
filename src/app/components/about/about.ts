import {Component, View} from 'angular2/core';
import {Http} from 'angular2/http';
import {Router, RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {MockableList} from '../mockable-list/mockable-list';
import {MockableService} from '../../services/mockable-service';
//import {ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styles: [require('./about.scss')],
  providers: [MockableService],
  directives: [MockableList, ROUTER_DIRECTIVES],
  pipes: []//,
  //encapsulation: ViewEncapsulation.Emulated
})
export class About {

  constructor() {}
}
