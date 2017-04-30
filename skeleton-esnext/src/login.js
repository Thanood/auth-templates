import {inject} from 'aurelia-framework';
import {Auth0Service} from './auth0-service';

@inject(Auth0Service)
export class Login {

  constructor(auth0Service) {
    let _lock = auth0Service.getLock();
    _lock.show();
  }
}