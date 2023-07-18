import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './page-not-found/not-found/not-found.component';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { UserDetailsComponent } from './input-page/user-details/user-details.component';
import { EducationDetailsComponent } from './input-page/education-details/education-details.component';
import { ExperienceDetailsComponent } from './input-page/experience-details/experience-details.component';
import { AdditionalDetailsComponent } from './input-page/additional-details/additional-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    InputPageComponent,
    OutputPageComponent,
    UserDetailsComponent,
    EducationDetailsComponent,
    ExperienceDetailsComponent,
    AdditionalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbDropdownModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
