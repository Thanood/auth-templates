

export class Auth0Service{

		// TODO: define the arguments for Auth0Lock somewhere else, in a safe way
	constructor() {
		this.isAuthenticated = false;
		this.lock = new Auth0Lock('naOQqh5iELQIIedEFipRvEsITv3awBmx', 'aureliatools.auth0.com');
  }

  getLock() {
  	return this.lock;
  }
}