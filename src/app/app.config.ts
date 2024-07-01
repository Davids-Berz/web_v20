import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {_itemsReducer} from "./components/store/item.reducer";
import {provideStore} from "@ngrx/store";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
    {
      items: _itemsReducer
    }
  )],
};
