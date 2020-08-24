import { AuthGuard } from './guards/auth.guard';
import { HttpLoginService } from './services/http-login.service';
import { HttpFirebaseService } from './services/http-firebase.service';
import { environment } from './../environments/environment';
import { Main_barComponent } from './components/main_bar/main_bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { NewInvestmentComponent } from './components/new-investment/new-investment.component';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { FormsModule }   from '@angular/forms';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';



export const firebaseConfig = {
  apiKey: "AIzaSyDa8irL7qnLEGXmqbllx0IaOrEN6UIsag8",
  authDomain: "test-gorila.firebaseapp.com",
  databaseURL: "https://test-gorila.firebaseio.com",
  projectId: "test-gorila",
  storageBucket: "test-gorila.appspot.com",
  messagingSenderId: "532190213663",
  appId: "1:532190213663:web:83fefe5e5fd4a51751472a",
  measurementId: "G-L1B699CVYR"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    Main_barComponent,
    NewInvestmentComponent,
    DialogConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [HttpLoginService, AuthGuard ],
  bootstrap: [AppComponent],
  entryComponents: [NewInvestmentComponent, DialogConfirmComponent]
})
export class AppModule { }
