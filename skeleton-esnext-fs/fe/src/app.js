export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia-Auth0 full stack front end';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
    ]);

    this.router = router;
  }
}
