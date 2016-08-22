import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';

import { routing } from './app.routing';

import AppComponent  from './app.component';
import HomePage from "../pages/home.page";
import AboutPage from "../pages/about.page";

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, HomePage, AboutPage],
  bootstrap: [AppComponent],
  providers: [
    DevToolsExtension,
    NgRedux,
    NgReduxRouter
  ]
})
export class AppModule {
}
