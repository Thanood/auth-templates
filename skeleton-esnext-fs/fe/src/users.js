import {inject} from 'aurelia-framework';
import {Endpoint} from 'aurelia-api';
import 'fetch';

@inject(Endpoint.of('backend'))
export class Users {
  heading = 'Github Users';
  users = [];
  backendEndpoint = null;

  constructor(backendEndpoint) {
    this.backendEndpoint = backendEndpoint;
  }

  activate() {
    return this.backendEndpoint.find('users')
      .then(users => this.users = users);
  }
}
