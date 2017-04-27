import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()

    .plugin('aurelia-api', config => {
      config.registerEndpoint('backend', 'http://localhost:5000/api/');
    });

  aurelia.start().then(() => aurelia.setRoot());
}
