import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './component/registration/registration.component';
import { NevbarComponent } from './modules/Modulecomponent/nevbar/nevbar.component';
import { MyTransactionComponent } from './modules/Modulecomponent/my-transaction/my-transaction.component';
import { TransferMoneyComponent } from './modules/Modulecomponent/transfer-money/transfer-money.component';
import { OurServicesComponent } from './modules/Modulecomponent/our-services/our-services.component';
import { GetLoanComponent } from './modules/Modulecomponent/get-loan/get-loan.component';
import { HeaderComponent } from './modules/Modulecomponent/header/header.component';
import { FooterComponent } from './modules/Modulecomponent/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './modules/Modulecomponent/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    RegistrationComponent,
    NevbarComponent,
    MyTransactionComponent,
    TransferMoneyComponent,
    OurServicesComponent,
    GetLoanComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
