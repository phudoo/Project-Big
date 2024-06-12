import { Component } from '@angular/core';
import { PhimService } from './../../../service/phim.service'

@Component({
  selector: 'app-create-phim',
  templateUrl: './create-phim.component.html',
  styleUrls: ['./create-phim.component.css']
})
export class CreatePhimComponent {
  phim = {
    TieuDe: '',
    TheLoai: '',
    ThoiLuong: '',
    NgayKhoiChieu: '',
    MoTa: '',
    DaoDien: '',
    DanhGia: '',
    PosterURL: '',
    TrailerURL: ''
  };

  constructor(private phimService: PhimService) {}

  onSubmit() {
    this.phimService.addPhim(this.phim).subscribe(response => {
      console.log('Phim created!', response);
      // Handle successful creation (e.g., redirect to list)
    });
  }
}
