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
  searchText: string = ''; // Input for search


  constructor(private phims: PhimService, private router: Router) {}

  ngOnInit(): void {
    this.loadPhim();
  }

  loadPhim() {
    this.phims.getPhim().subscribe(res => {
      this.Phim = res; // Gán dữ liệu phim từ phản hồi API vào biến Phim của component
      console.log(this.Phim); // Log dữ liệu phim ra console cho mục đích debug (có thể xóa đi sau khi hoàn thành)
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

  onLogout() {
    // Add your logout logic here (e.g., removing user token, clearing session storage)
    console.log('User logged out');
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
 // list-phim.component.ts
searchPhim() {
  if (this.searchText.trim() === '') {
    this.loadPhim(); // Reload all movies if search text is empty
  } else {
    this.phims.searchPhimByTitle(this.searchText).subscribe(res => {
      this.Phim = res;
      this.currentPage = 1; // Reset to first page after search
    });
  }
}

}
