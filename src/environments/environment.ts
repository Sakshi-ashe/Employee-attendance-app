// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBq_19trBzyfhmQMfE2Dl6AoJyYVroKJQw",
    authDomain: "mob-att.firebaseapp.com",
    databaseURL: "https://mob-att.firebaseio.com",
    projectId: "mob-att",
    storageBucket: "mob-att.appspot.com",
    messagingSenderId: "227018100144",
    appId: "1:227018100144:web:70335c1b13dbf266"
  },
  emailAPI: "sakshi.17gupta1998@gmail.com",
  database: 'firebase',
  social: {
    fblink: '',
    linkedin: '',
    github: '',
    emailId: 'mailto://sakshi.17gupta1998@gmail.com'
  },
  socialAuthEnabled: true,
  googleMapsKey: 'AIzaSyD-NQ2S19-o3aVX9Ubc3hBNrXHpuVnLzkA'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
