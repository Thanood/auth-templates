import {inject} from 'aurelia-framework';
import { RedirectToRoute } from 'aurelia-router';
import {Auth0Service} from './auth0-service';


@inject(Auth0Service)

export class App {
  constructor(auth0Service) {
    let _lock = auth0Service.getLock();

    _lock.on("authenticated", (authResult) => {
      _lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log("getProfile failed.")
          return;
        }

        let _profile = JSON.stringify(profile);
        let _id_token = authResult.idToken;

        _lock.hide();
      });
    });


  }

  configureRouter(config, router) {

    var step = new AuthorizeStep;
    config.addAuthorizeStep(step);

    config.title = 'Aurelia-Auth0';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users', settings: { auth: true }   },
      { route: 'login',         name: 'login',        moduleId: 'login',        nav: true, title: 'Login' }
    ]);

    this.router = router;
  }
}

class AuthorizeStep {
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
      var isLoggedIn = false;
      if (!isLoggedIn) {
        return next.cancel(new RedirectToRoute('login'));
      }
    }

    return next();
  } 
}

