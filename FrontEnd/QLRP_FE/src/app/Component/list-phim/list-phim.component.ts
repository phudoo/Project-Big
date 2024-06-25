import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../service/phim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.css']
})
export class ListPhimComponent implements OnInit {

  title = "List Phim";
  Phim: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4; // Number of items per page

  constructor(private phims: PhimService) {}

  ngOnInit(): void {
    this.loadPhim();
  }

  loadPhim() {
    this.phims.getPhim().subscribe(res => {
      this.Phim = res;
      console.log(this.Phim);
    });
  }

  // Pagination methods
  nextPage() {
    this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Calculate start and end index for current page
  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage - 1, (this.Phim.length - 1));
  }

  // Function to determine total number of pages
  get totalPages(): number {
    return Math.ceil(this.Phim.length / this.itemsPerPage);
  }

}
