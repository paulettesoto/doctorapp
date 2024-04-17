import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { storageService } from 'src/app/storage.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  comments: any[] = [];
  page=1;
  pages=1;
  paged=6;
  constructor(private http:HttpClient, private storage:storageService ){

  }
  ngOnInit(): void {
    this.commentslist();
  }
  paginador(i:number){
    let r:Number;
    this.page=this.page+i;
    r=this.page;
    if(r==0){
      this.page=1;
    }
    if(r==(this.pages+1)){
      this.page=(this.pages);
    }

  }
  commentslist() {
    const url = `${environment.apiUrl}/comments/comments`;

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('user'));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.comments) {
          this.comments = response.comments;
          this.pages=Math.ceil(this.comments.length/this.paged);
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
