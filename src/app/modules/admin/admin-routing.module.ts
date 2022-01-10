import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetLoanComponent } from '../Modulecomponent/get-loan/get-loan.component';
import { MyTransactionComponent } from '../Modulecomponent/my-transaction/my-transaction.component';
import { NevbarComponent } from '../Modulecomponent/nevbar/nevbar.component';
import { OurServicesComponent } from '../Modulecomponent/our-services/our-services.component';
import { TransferMoneyComponent } from '../Modulecomponent/transfer-money/transfer-money.component';

const routes: Routes = [
  {
    path: '',
    component: NevbarComponent,
    children: [
      {
        path: 'my-transaction',
        component: MyTransactionComponent
      },
      {
        path: 'ourServices',
        component: OurServicesComponent
      },
      {
        path: 'Transfer Money',
        component: TransferMoneyComponent
      },
      {
        path: 'getloan',
        component: GetLoanComponent
      },
      {
        path: '',
        redirectTo: '/admin/ourServices',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
