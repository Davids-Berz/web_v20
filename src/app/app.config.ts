import {ApplicationConfig, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {_counterReducer} from './store/items.reducer';
import {provideStoreDevtools} from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({
    counter: _counterReducer
  }),
  provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})]
};
