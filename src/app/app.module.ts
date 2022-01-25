import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { RecapComponent } from './components/recap/recap.component';
import { InputComponent } from './components/input/input.component';

import { PhonePipe } from './pipes/phone.pipe';
import { MonService } from './services/mon-service.service';
import { CatalogComponent } from './components/catalog/catalog.component';

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
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [MonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
