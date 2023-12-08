import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  comments: any[] = [];

  constructor(private http:HttpClient, private storage:storageService ){

  }
  ngOnInit(): void {
    this.commentslist();
  }

  commentslist() {
    const url = 'https://doctorappbackend-wpqd.onrender.com/comments/comments';

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('user'));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.comments) {
          this.comments = response.comments;
          console.log(this.comments);
        } else {
          console.error('Error:', response);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
