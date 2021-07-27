import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryComponent } from './brewery/brewery.component';
import { HttpClientModule } from '@angular/common/http';
import { BreweryService } from './brewery.service';
import { BreweryDetailsComponent } from './brewery-details/brewery-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BreweryComponent,
    BreweryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
