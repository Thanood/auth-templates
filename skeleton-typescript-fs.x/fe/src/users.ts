import {inject} from 'aurelia-framework';
import {Config, Rest} from 'aurelia-api';

@inject(Config)
export class Users {
  endpoint: Rest;
  public heading = 'Github Users';
  public users = [];  

  constructor(config: Config) {
    this.endpoint = config.getEndpoint('backend');
  }

  activate() {
    return this.endpoint.find('users')
      .then(users => this.users = users as any);
  }
}