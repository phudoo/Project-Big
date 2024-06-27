import { Component, OnInit } from '@angular/core';
import { LichchieuService } from '../../service/lichchieu.service';
import { PhimService } from '../../service/phim.service';

@Component({
  selector: 'app-list-xuat-chieu',
  templateUrl: './list-xuat-chieu.component.html',
  styleUrls: ['./list-xuat-chieu.component.css']
})
export class ListXuatChieuComponent implements OnInit {
  title = "List Xuat Chieu";
  LichChieu: any;
  Phim: any;

  constructor(
    private lichchieus: LichchieuService,
    private phimService: PhimService
  ) {}

  ngOnInit(): void {
    this.lichchieus.getLich().subscribe(res => {
      this.LichChieu = res;
      console.log('Lich Chieu:', this.LichChieu);
    });

    this.phimService.getPhim().subscribe(res => {
      this.Phim = res;
      console.log('Phim:', this.Phim);
    });
  }
}
