import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustommaterialModule } from './shared/custommaterial/custommaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './product/attendance.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { AboutusComponent } from './shared/aboutus.component';
import { LoginComponent } from './shared/login.component';
import { SignupComponent } from './shared/signup.component';
// Angular Firebase settings
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { DropZoneDirective } from './shared/Drop/dropzone.directive';
import { FileSizePipe } from './shared/Drop/filesize.pipe';
import { FileUploadComponent } from './shared/Drop/fileupload/fileupload.component';


//for social login
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1124464631080451")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("sakshi.17gupta1998@gmail.com")
        }
      ]
  )
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe,
    FileUploadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustommaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireModule.initializeApp(environment.firebase, 'Attendance-APP'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [{provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule {}