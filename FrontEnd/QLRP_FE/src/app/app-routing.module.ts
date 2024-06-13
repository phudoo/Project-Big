import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPhimComponent } from './Component/list-phim/list-phim.component';
import { ListPhongChieuComponent } from './Component/list-phong-chieu/list-phong-chieu.component';
import { CreatePhimComponent } from './chucnang/phim/create-phim/create-phim.component';
import { LoginComponent } from './Component/login/login.component';
import { DangKyComponent } from './Component/dang-ky/dang-ky.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dangky', component:DangKyComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: ListPhimComponent},
  { path: '', component:ListPhongChieuComponent},
  { path: 'create-phim', component: CreatePhimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
