import { Component, OnInit } from '@angular/core';
import { LichchieuService } from '../../service/lichchieu.service';
@Component({
  selector: 'app-list-xuat-chieu',
  templateUrl: './list-xuat-chieu.component.html',
  styleUrl: './list-xuat-chieu.component.css'
})
export class ListXuatChieuComponent {
  title = "List Xuat Chieu";
  LichChieu: any;

  constructor(private lichchieus: LichchieuService) {}

  ngOnInit(): void {
    this.lichchieus.getLich().subscribe(res => {
      this.LichChieu = res;
      console.log(this.LichChieu);
    });
  }
}
