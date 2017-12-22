import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterlinksComponent } from './footerlinks/footerlinks.component';
import { FootertextService } from './footertext.service';
import { ReplaceLineBreaks } from './removespace.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
 },
 {
  path: 'about_us',
  component: AboutComponent
},
  
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterlinksComponent,
    ReplaceLineBreaks,
     HomeComponent,
     AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FootertextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
