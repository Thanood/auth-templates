import {inject} from 'aurelia-framework';
import {Endpoint} from 'aurelia-api';
import 'fetch';

@inject(Endpoint.of('github'))
export class Users {
  heading = 'Github Users';
  users = [];
  githubEndpoint = null;

  constructor(githubEndpoint) {
    this.githubEndpoint = githubEndpoint;
  }

  activate() {
    return this.githubEndpoint.find('users')
      .then(users => this.users = users);
  }
}