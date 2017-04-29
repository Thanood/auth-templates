import {inject} from 'aurelia-framework';  
import {Auth0Service} from './auth0-service';

@inject(Auth0Service)
export class Login {

	 constructor(auth0Service) {
   	this.lock = auth0Service.getLock();
	  this.lock.show();

    //var self = this;
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          return;
        }

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.isAuthenticated = true;
        this.lock.hide();
      });
    });
  }
}