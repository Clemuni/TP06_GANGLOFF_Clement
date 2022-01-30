import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ClientFormComponent } from './components/customerAccount/client-form/client-form.component';
import { RecapComponent } from './components/customerAccount/recap/recap.component';
import { InputComponent } from './components/common/input/input.component';

import { PhonePipe } from './pipes/phone.pipe';
import { MonService } from './services/mon-service.service';
import { CatalogComponent } from './components/products/catalog/catalog.component';
import { CartComponent } from './components/products/cart/cart.component';
import { CustomerAccountComponent } from './components/customerAccount/customer-account/customer-account.component';
import { HomeComponent } from './components/common/home/home.component';
import { Page404Component } from './components/common/page404/page404.component';

import { ProductState } from './redux/states/product.state';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compte-client', component: CustomerAccountComponent },
  { path: 'produits/catalogue', component: CatalogComponent },
  { path: 'produits/panier', component: CartComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientFormComponent,
    RecapComponent,
    InputComponent,
    PhonePipe,
    CatalogComponent,
    CustomerAccountComponent,
    HomeComponent,
    Page404Component,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ProductState]),
  ],
  providers: [MonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
