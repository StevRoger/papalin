import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatRippleModule} from "@angular/material/core";
import {MatTabsModule} from "@angular/material/tabs";
import { ProductComponent } from './component/product/product.component';
import { ProductDialogComponent } from './component/product-dialog/product-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductDialogComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatRippleModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class PageModule { }
