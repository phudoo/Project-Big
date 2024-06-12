import { Component, OnInit } from '@angular/core';
import { PhongService } from '../../service/phong.service';
@Component({
  selector: 'app-list-phong-chieu',
  templateUrl: './list-phong-chieu.component.html',
  styleUrl: './list-phong-chieu.component.css'
})
export class ListPhongChieuComponent implements OnInit {

  title = "List Phong";
  Phong: any;

  constructor(private phongchieus: PhongService) {}

  ngOnInit(): void {
    this.phongchieus.getPhong().subscribe(res => {
      this.Phong = res;
      console.log(this.Phong);
    });
  }
}
