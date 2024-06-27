import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '../app/Component/footer/footer.component';
import { PosterComponent } from '../app/Component/poster/poster.component';
import { TrailerComponent } from '../app/Component/trailer/trailer.component';
import { LoginComponent } from '../app/Component/login/login.component';
import { ListPhimComponent } from './Component/list-phim/list-phim.component';
import { ListPhongChieuComponent } from './Component/list-phong-chieu/list-phong-chieu.component';
import { ListXuatChieuComponent } from './Component/list-xuat-chieu/list-xuat-chieu.component';
import { DatVeComponent } from './Component/dat-ve/dat-ve.component';
import { DangKyComponent } from './Component/dang-ky/dang-ky.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerComponent } from './Component/admin/manager/manager.component';
import { PhimDetailComponent } from './Component/phim-detail/phim-detail.component';
import { ListNguoiDungComponent } from './Component/admin/nguoidung/list-nguoidung/list-nguoidung.component';
import { AdminPhimComponent } from './Component/admin/admin-phim/admin-phim.component';
import { AdminLichChieuComponent } from './Component/admin/admin-lichchieu/admin-lichchieu.component';
import { AdminPhongchieuComponent } from './Component/admin/admin-phongchieu/admin-phongchieu.component';
import { AdminVeComponent } from './Component/admin/admin-ve/admin-ve.component';
import { AdminGheComponent } from './Component/admin/admin-ghe/admin-ghe.component';
import { AdminDoanhThuComponent } from './Component/admin/admin-doanhthu/admin-doanhthu.component';
import { DoanhThuService } from './service/doanh-thu.service';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PosterComponent,
    TrailerComponent,
    LoginComponent,
    ListPhongChieuComponent,
    ListXuatChieuComponent,
    DatVeComponent,
    DangKyComponent,
    ListPhimComponent,
    ManagerComponent,
    PhimDetailComponent,
    ListNguoiDungComponent,
    AdminPhimComponent,
    AdminLichChieuComponent,
    AdminPhongchieuComponent,
    AdminVeComponent,
    AdminGheComponent,
    AdminDoanhThuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,// Add HttpClientModule here
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(
      withFetch() // Kích hoạt `fetch` API
    ), DoanhThuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
