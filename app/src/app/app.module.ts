import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './service/auth.service';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { I18NEXT_SERVICE, I18NextLoadResult, I18NextModule, ITranslationService, defaultInterpolationFormat } from 'angular-i18next';

const i18nextOptions = {
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'act_log': 'activity log',
        'forget': 'forget password',
        'item': {
          'create': 'create {{item}}'
        },
        'login': 'login',
        'logout': 'logout',
        'profile': 'profile',
        'reg': 'create an account',
        'settings': 'settings',
        'welcome': 'Welcome Back'
      }
    },
    de: {
      translation: {
        'welcome': 'Willkommen zu Deiner Vue.js App'
      }
    }
  },
  interpolation: {
    format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
  }
};

export function appInit(i18next: ITranslationService) {
  return () => {
    let promise: Promise<I18NextLoadResult> = i18next
      .init(i18nextOptions);
    return promise;
  };
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    I18NextModule.forRoot(),
    LayoutModule,
  ],
  providers: [
    I18N_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
