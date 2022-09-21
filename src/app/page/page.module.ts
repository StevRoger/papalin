import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageRoutingModule} from './page-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {MatRippleModule} from "@angular/material/core";
import {MatTabsModule} from "@angular/material/tabs";
import {ProductComponent} from './component/product/product.component';
import {ProductDialogComponent} from './component/product-dialog/product-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {LoginComponent} from './component/login/login.component';
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {SocialLoginModule} from "angularx-social-login";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { LoadingProductComponent } from './component/loading-product/loading-product.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductDialogComponent,
    LoginComponent,
    LoadingProductComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatRippleModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    SocialLoginModule,
    MatMenuModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    MatSnackBarModule,
  ]
})
export class PageModule {
}
