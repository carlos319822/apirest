import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../services/swaggerbillingAPI';
import { BASE_PATH } from '../services/swaggerbillingAPI';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule,
    FormsModule
  ],
  providers: [
    {
    provide: BASE_PATH, useValue: environment.basePath
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
