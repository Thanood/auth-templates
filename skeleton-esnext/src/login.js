import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Auth0Service} from './auth0-service';

@inject(Auth0Service, Router)
export class Login {

  constructor(auth0Service, router) {
    this.auth0Service = auth0Service;
    this.router = router;
  }

  attached() {
    this.auth0Service.login()
    .then(profile => {
      console.log(profile);
    })
    .catch(error => {
      this.router.navigateBack();
      console.error(error);
    });
  }
}
