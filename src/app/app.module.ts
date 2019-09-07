import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { ProfileComponent } from './profile/profile.component';
import { WebsiteComponent } from './website/website.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MultiplesComponent } from './multiples/multiples.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { HomeeComponent } from './homee/homee.component';
import { Year2020Component } from './year2020/year2020.component';
import { DescendingComponent } from './descending/descending.component';
import { DescorderComponent } from './descorder/descorder.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AdditemComponent } from './additem/additem.component';
import { SignupComponent } from './signup/signup.component';
import { AddnewComponent } from './addnew/addnew.component';
import { UnorderComponent } from './unorder/unorder.component';
import { StatesComponent } from './states/states.component';
import { EmployeeComponent } from './employee/employee.component';
import { AgelimitComponent } from './agelimit/agelimit.component';
import { HttpClientModule } from '@angular/common/http';
import { SideserveComponent} from './sideserve/sideserve.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { EmptyComponent } from './empty/empty.component';
import { UiComponent } from './ui/ui.component';
import { HomeComponent} from './home/home.component';
import { SignComponent } from './sign/sign.component';
import {RegistrationformComponent} from './registrationform/registrationform.component';
import { CalcComponent } from './calc/calc.component';
import {UserComponent }from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SlideComponent } from './slide/slide.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Slide3Component } from './slide3/slide3.component';
import { IdcardComponent } from './idcard/idcard.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
import { HelloComponent } from './hello/hello.component';
import { SearchPipe } from './search.pipe';
import{ NavComponent } from './nav/nav.component';
import { CoupanComponent } from './coupan/coupan.component';
import { TolistComponent } from './tolist/tolist.component';
import { SetdateComponent } from './setdate/setdate.component';
import { RegisterValidationComponent } from './register-validation/register-validation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RestabComponent } from './restab/restab.component';
import { HighlightDirective } from './highlight.directive';
import { NumberComponent } from './number/number.component';
import { CrudComponent } from './crud/crud.component';
import { Signup5Component } from './signup5/signup5.component';
//import { RegisterValidation1Component } from './register-validation1/register-validation1.component';

// import { Page1Component } from './page1/page1.component';
// import { Page2Component } from './page2/page2.component';
//import { Todolist3Component } from './todolist3/todolist3.component';
import { APICOMPComponent } from './apicomp/apicomp.component';
//import { Apicomp2Component}from './apicomp2/apicomp2.component';
import { PipeComponent } from './pipe/pipe.component';
import { MovieComponent } from './movie/movie.component';
import { Todolist3Component } from './todolist3/todolist3.component';
import { Apicomp2Component } from './apicomp2/apicomp2.component';
import { Tolist1Component } from './tolist1/tolist1.component';
//import {  BangloreComponent } from './bangalore/bangalore.component';
import { MysoreComponent } from './mysore/mysore.component';
import { MandyaComponent } from './mandya/mandya.component';
//import { BangaloreComponent } from './bangalore/bangalore.component';
import { BangloreComponent } from './banglore/banglore.component';
@NgModule({
 declarations: [
 AppComponent,
 HomeComponent,
 ProfileComponent,
 WebsiteComponent,
 MultiplesComponent,
 EmpdataComponent,
 HomeeComponent,
 Year2020Component,
 DescendingComponent,
 DescorderComponent,
 HeroesComponent,
 AdditemComponent,
 SignupComponent,
 AddnewComponent,
 SlideComponent,
 UnorderComponent,
 StatesComponent,
 EmployeeComponent,
 AgelimitComponent,
 SideserveComponent,
 ThumbnailComponent,
 EmptyComponent,
 UiComponent,
 HomeComponent,
 SignComponent,
 RegistrationformComponent,
 UserComponent,
 LoginComponent,
 CalcComponent,
 AboutComponent,
 Slide3Component,
 IdcardComponent,
 ContactComponent,
 HelloComponent,
 SearchPipe,
 NavComponent,
 CoupanComponent,
 TolistComponent,
 SetdateComponent,
 RegisterValidationComponent,
 CheckoutComponent,
 RestabComponent,
 HighlightDirective,
 NumberComponent,
 CrudComponent,
 Signup5Component,
 //RegisterValidation1Component,
 
//  Page1Component,
//  Page2Component,
//  Todolist3Component,
 APICOMPComponent,
 //Apicomp2Component,
 PipeComponent,
 MovieComponent,
 Todolist3Component,
 Apicomp2Component,
 Tolist1Component,
 //BangloreComponent,
 MysoreComponent,
 MandyaComponent,
 //BangaloreComponent,
 BangloreComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [ServiceService],
 
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
