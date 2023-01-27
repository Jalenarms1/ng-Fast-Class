import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { DemoPathComponent } from './demo-path/demo-path.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'
import { CreateClassComponent } from './create-class/create-class.component';
import { RouterModule } from '@angular/router';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { DashboardReportComponent } from './dashboard-report/dashboard-report.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    HeaderComponent,
    FeaturesComponent,
    FooterComponent,
    DemoPathComponent,
    LandingComponent,
    LoginComponent,
    CreateClassComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardMainComponent,
    DashboardCardsComponent,
    DashboardReportComponent,
    AddAssignmentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
