// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCt3D7b6tw5oVxBhwOaJuTjEnNHC6j7e_0',
    authDomain: 'fireapp-udemy.firebaseapp.com',
    databaseURL: 'https://fireapp-udemy.firebaseio.com',
    projectId: 'fireapp-udemy',
    storageBucket: '',
    messagingSenderId: '877373648815'
  }
};
