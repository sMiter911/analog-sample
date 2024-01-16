import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private _http: HttpClient) {}

  // Fetch a user's profile
  getUser(username: string): Observable<any> {
    return this._http.get<any>(`https://api.github.com/users/${username}`);
  }

  // Get a user's repositories
  getUserRepos(username: string): Observable<any> {
    return this._http.get<any>(
      `https://api.github.com/users/${username}/repos`
    );
  }
}
