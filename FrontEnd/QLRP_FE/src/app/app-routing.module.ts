import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPhimComponent } from './Component/list-phim/list-phim.component';
import { ListPhongChieuComponent } from './Component/list-phong-chieu/list-phong-chieu.component';
import { CreatePhimComponent } from './chucnang/phim/create-phim/create-phim.component';
const routes: Routes = [
  {path: '', component: ListPhimComponent},
  {path: '', component:ListPhongChieuComponent},
  { path: 'create-phim', component: CreatePhimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
