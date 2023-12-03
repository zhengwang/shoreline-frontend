import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { Chap8Module } from './chap8/chap8.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { I18NEXT_SERVICE, I18NextModule, ITranslationService, defaultInterpolationFormat } from 'angular-i18next';


export function appInit(i18next: ITranslationService) {
  return () => i18next.init({
    fallbackLng: 'en',
    supportedLngs: ['en'],
    debug: true,
    returnEmptyString: true,
    resources: {
      en: {
        translation: {
          'welcome': 'Welcome to your angular app.',
          'chap8': 'Component communication',
          'email': 'email',
          'signin': 'sign in',
          'remember_me': 'remember me'
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
  });
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    Chap8Module,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    I18NextModule.forRoot(),
  ],
  providers: [
    I18N_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
