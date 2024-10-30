import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './elements/landing/landing.component';
import { TestimonialsComponent } from './elements/testimonials/testimonials.component';
import { GaleryComponent } from './elements/galery/galery.component';
import { ProductsComponent } from './elements/products/products.component';
import { FooterComponent } from './elements/footer/footer.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { EquipeComponent } from './elements/equipe/equipe.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReasonsComponent } from './elements/reasons/reasons.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TestimonialsComponent,
    GaleryComponent,
    ProductsComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    TeamComponent,
    EquipeComponent,
    ContactComponent,
    ReasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
