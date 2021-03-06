import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { LoadingComponent } from './loading/loading.component';
import { MatTooltipModule } from '@angular/material/tooltip';

library.add(fas, far);

@NgModule({
  declarations: [HomeComponent, NavbarComponent, LoadingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularFontAwesomeModule,
    NgxPageScrollCoreModule,
    MatTooltipModule






  ],
  exports: [HomeComponent]
})
export class HomeModule { }
