import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liga',
  standalone: true,
  imports: [],
  templateUrl: './liga.html',
  styleUrls: ['./liga.css']
})
export class LigaComponent implements OnInit {

  posts: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.loading = true;
    this.http.get<any[]>('https://twoja-strona-wordpress.pl/wp-json/wp/v2/posts?per_page=3')
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Nie udało się pobrać danych z WordPressa.';
          console.error(err);
          this.loading = false;
        }
      });
  }
}
