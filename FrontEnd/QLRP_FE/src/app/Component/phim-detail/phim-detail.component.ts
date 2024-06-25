// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../service/phim.service'; // Adjust path as per your service location

@Component({
  selector: 'app-phim-detail',
  templateUrl: './phim-detail.component.html',
  styleUrls: ['./phim-detail.component.css']
})
export class PhimDetailComponent implements OnInit {
  phim: any; // Define the property to hold movie details

  constructor(
    private route: ActivatedRoute,
    private phimService: PhimService // Inject PhimService for fetching data
  ) { }

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
}
