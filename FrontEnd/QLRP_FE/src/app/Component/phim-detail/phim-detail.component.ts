// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../service/phim.service'; // Adjust path as per your service location
import { Router } from '@angular/router';
@Component({
  selector: 'app-phim-detail',
  templateUrl: './phim-detail.component.html',
  styleUrls: ['./phim-detail.component.css']
})
export class PhimDetailComponent implements OnInit {
  phim: any; // Define the property to hold movie details

  constructor(
    private route: ActivatedRoute,
    private phimService: PhimService,
    private router: Router) {}


  ngOnInit(): void {
    // Extract 'id' parameter from the current route
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam; // Convert idParam to a number
      // Call the service method to fetch movie details by id
      this.phimService.getPhimById(id).subscribe(
        (data: any) => {
          this.phim = data; // Assign fetched data to 'phim' property
        },
        (error: any) => {
          console.error('Error fetching phim details:', error);
        }
      );
    } else {
      console.error('No ID parameter found in route');
    }

  }
  
  onLogout() {
    // Add your logout logic here (e.g., removing user token, clearing session storage)
    console.log('User logged out');
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
