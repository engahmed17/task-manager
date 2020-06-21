import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { from } from 'rxjs';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    HomeComponent,
    TaskComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyDCaFsmti90PKGTivLo8o5ewiYIOJUweq8",
    authDomain: "task-manager-6ecaf.firebaseapp.com",
    databaseURL: "https://task-manager-6ecaf.firebaseio.com",
    projectId: "task-manager-6ecaf",
    storageBucket: "task-manager-6ecaf.appspot.com",
    messagingSenderId: "7489471804",
    appId: "1:7489471804:web:1d0dbeb6548c11095cca39",
    measurementId: "G-5G1990ZM7M"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
