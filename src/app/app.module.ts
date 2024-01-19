import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardsComponent } from './cards/cards.component';
import { ButtonComponent } from './button/button.component';
import { HomePageModule } from './home-page/home-page.module';
import { UserLoginModule } from './user-login/user-login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    CardsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    DashboardModule,
    HomePageModule,
    UserLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
