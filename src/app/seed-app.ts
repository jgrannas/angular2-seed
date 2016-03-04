import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Welcome} from './components/welcome/welcome';
import {SelectionCriteria} from './components/selection-criteria/selection-criteria';
import {Recommendations} from './components/recommendations/recommendations';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import {ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'seed-app',
  providers: [],
  templateUrl: 'app/seed-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  styles:[require('../assets/stylesheets/global.scss')],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  new Route({ path: '/welcome', component: Welcome, name: 'Welcome', useAsDefault: true}),
  new Route({ path: '/selection-criteria', component: SelectionCriteria, name: 'SelectionCriteria'}),
  new Route({ path: '/recommendations', component: Recommendations, name: 'Recommendations'}),
  new Route({ path: '/about', component: About, name: 'About'}),
  new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])
export class SeedApp {

  constructor() {}

}
