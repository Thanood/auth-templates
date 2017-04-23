import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()

    .plugin('aurelia-api', config => {
      config.registerEndpoint('github', 'https://api.github.com/');
    });

  aurelia.start().then(() => aurelia.setRoot());
}
