export class Auth0Service {
  lockPromise = null;
  lockPromiseResolver = {
    resolve: null,
    reject: null
  };

	// TODO: define the arguments for Auth0Lock somewhere else, in a safe way
  constructor() {
    this.isAuthenticated = false;
    this.lock = new Auth0Lock('naOQqh5iELQIIedEFipRvEsITv3awBmx', 'aureliatools.auth0.com');
    this.lock.on('authenticated', this.handleLogin.bind(this));
    this.lock.on('hide', () => {
      if (this.lockPromiseResolver) {
        this.lockPromiseResolver.reject(new Error('login cancelled'));
      }
    });
    console.log('lock', this.lock);
  }

  handleLogin(authResult) {
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('getProfile failed.');
        this.lockPromiseResolver.reject(error);
        return;
      }

      // let _profile = JSON.stringify(profile);
      // let _id_token = authResult.idToken;

      this.lock.hide();
      this.lockPromiseResolver.resolve(profile);
    });
  }

  login() {
    this.lockPromise = new Promise((resolve, reject) => {
      this.lockPromiseResolver.resolve = resolve;
      this.lockPromiseResolver.reject = reject;
    });
    this.lock.show();

    return this.lockPromise;
  }
}
