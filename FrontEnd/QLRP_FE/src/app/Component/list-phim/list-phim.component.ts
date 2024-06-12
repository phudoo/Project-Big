import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../service/phim.service';

@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.css'] // Corrected to styleUrls
})
export class ListPhimComponent implements OnInit {

  title = "List Phim";
  Phim: any;

  constructor(private phims: PhimService) {}

  ngOnInit(): void {
    this.phims.getPhim().subscribe(res => {
      this.Phim = res;
      console.log(this.Phim);
    });
  }
}
