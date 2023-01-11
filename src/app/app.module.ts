import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
import { ProfileComponent } from './profile/profile.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CsvuploadComponent } from './csvupload/csvupload.component';
import { DiscountComponent } from './discount/discount.component';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    CategoryComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    WishlistComponent,
    ViewcartComponent,
    ProfileComponent,
    OrderhistoryComponent,
    AdminloginComponent,
    CsvuploadComponent,
    DiscountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot(), 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
