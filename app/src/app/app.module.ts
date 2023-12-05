import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { I18NEXT_SERVICE, I18NextModule, ITranslationService, defaultInterpolationFormat } from 'angular-i18next';
import { AuthinterceptorService } from './service/authinterceptor.service';
import { DashboardModule } from './dashboard/dashboard.module';


export function appInit(i18next: ITranslationService) {
  return () => i18next.init({
    fallbackLng: 'en',
    supportedLngs: ['en'],
    debug: true,
    returnEmptyString: true,
    resources: {
      en: {
        translation: {
          'account': 'account',
          'customize': 'customize',
          'email': 'email address',
          'film': 'film',
          'payment': 'payment',
          'password': 'password',
          'remember_me': 'remember me',
          'signin': 'sign in',
          'warehouse': 'warehouse',
          'welcome': 'Welcome to your angular app.',
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
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    I18NextModule.forRoot(),
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    I18N_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
