import {Component} from 'angular2/core';
import {MockableService} from '../../services/mockable-service';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'mock-list',
  template: '<ul><li *ngFor="#item of mock_items | async"><a href="{{item.url}}">{{item.name}}</a></li></ul>',
  styleUrls: ['app/components/mockable-list/mockable-list.css'],
  providers: [MockableService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class MockableList {
  mock_items: Observable<any>
  constructor(mockableService: MockableService, params:RouteParams) {
    this.mock_items = mockableService.getList();
  }
}
