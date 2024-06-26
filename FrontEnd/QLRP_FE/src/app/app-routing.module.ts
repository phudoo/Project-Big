import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPhimComponent } from './Component/list-phim/list-phim.component';
import { ListPhongChieuComponent } from './Component/list-phong-chieu/list-phong-chieu.component';
import { CreatePhimComponent } from './chucnang/phim/create-phim/create-phim.component';
import { LoginComponent } from './Component/login/login.component';
import { DangKyComponent } from './Component/dang-ky/dang-ky.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AuthGuard } from './service/auth-guard.service';
import { ManagerComponent } from './Component/admin/manager/manager.component';
import { PhimDetailComponent } from './Component/phim-detail/phim-detail.component';
import { ListNguoiDungComponent } from './Component/admin/nguoidung/list-nguoidung/list-nguoidung.component';
import { AdminPhimComponent } from './Component/admin/admin-phim/admin-phim.component';
import { AdminPhongchieuComponent } from './Component/admin/admin-phongchieu/admin-phongchieu.component';
import { AdminLichchieuComponent } from './Component/admin/admin-lichchieu/admin-lichchieu.component';
import { AdminVeComponent } from './Component/admin/admin-ve/admin-ve.component';
import { AdminGheComponent } from './Component/admin/admin-ghe/admin-ghe.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dangky', component:DangKyComponent},
  { path: 'list-nguoidung', component: ListNguoiDungComponent },
  { path: 'admin-phim', component: AdminPhimComponent },
  { path: 'admin-phongchieu', component: AdminPhongchieuComponent },
  { path: 'admin-lichchieu', component: AdminLichchieuComponent },
  { path: 'admin-ve', component: AdminVeComponent },
  { path: 'admin-ghe', component: AdminGheComponent },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'phim-detail/:id', component: PhimDetailComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'listphim', component: ListPhimComponent},
  { path: '', component:ListPhongChieuComponent},
  { path: 'create-phim', component: CreatePhimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
