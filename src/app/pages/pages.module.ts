import { WebApiPromiseService } from './../services/web-api-promise-service';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationGuard } from '../services/authGuard.service';
import { Pages } from './pages.component';


@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    WebApiPromiseService,
  ],
})
export class PagesModule {
}
