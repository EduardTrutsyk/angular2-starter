import {RouterConfig} from '@angular/router';

import HomePage from '../pages/home.page';
import AboutPage from '../pages/about.page';

export const APP_ROUTES: RouterConfig = [{
  path: 'home',
  component: HomePage
}, {
  path: 'about',
  component: AboutPage
}];
