import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../App/app.component';
import { NavbarComponent } from 'src/app/features/navbar/navbar.component';
import { GeneratorComponent } from 'src/app/features/generator/generator.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, GeneratorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
