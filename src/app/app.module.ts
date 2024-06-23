import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/ru-UA';
import { HomeComponent } from './home.component';
import { AuthTokenAudience, BACKEND_URL } from './app.constants';

registerLocaleData(localeUa, 'uk-UA');

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'UAH' },
    { provide: LOCALE_ID, useValue: 'uk-UA' },
    { provide: BACKEND_URL, useValue: environment.backendUrl },
    { provide: AuthTokenAudience, useValue: environment.tokenAudience }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
