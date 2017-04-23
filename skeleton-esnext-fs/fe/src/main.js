import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-api', config => {
      config.registerEndpoint('backend', 'http://localhost:5000/api/');
    })

  aurelia.start().then(() => aurelia.setRoot());
}
