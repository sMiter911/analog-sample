import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  template: ` <div class="container mx-auto my-8">
    <div class="flex items-center justify-center">
      <div class="max-w-md p-8 bg-white rounded shadow-lg">
        <h1 class="text-3xl font-bold mb-4 text-zinc-950">{{ user.name }}</h1>

        <div class="flex items-center mb-4">
          <img
            *ngIf="user.avatar_url"
            [src]="user.avatar_url"
            alt="User Avatar"
            class="w-10 h-10 rounded-full mr-2"
          />
          <p class="text-gray-600">{{ user.bio }}</p>
        </div>

        <div class="mb-4">
          <p class="text-gray-600">
            <strong>Followers:</strong> {{ user.followers }} |
            <strong>Following:</strong> {{ user.following }}
          </p>
          <p class="text-gray-600">
            <strong>Location:</strong> {{ user.location }} |
            <strong>Joined:</strong> {{ user.created_at | date : 'medium' }}
          </p>
        </div>

        <h2 class="text-xl font-bold mb-2">Top 10 Repositories:</h2>

        <ul>
          <li *ngFor="let repo of repos.slice(0, 5)" class="mb-2">
            <a [href]="repo.html_url" target="_blank" class="text-blue-500">{{
              repo.name
            }}</a>
            <p class="text-gray-600">{{ repo.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>`,
  styles: [``],
  imports: [CommonModule],
})
export default class HomeComponent implements OnInit {
  user: any = {};
  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.fetchUser('smiter911');
  }

  fetchUser(username: string) {
    this.githubService.getUser(username).subscribe((user) => {
      this.user = user;
      this.fetchRepos(username);
    });
  }

  fetchRepos(username: string) {
    this.githubService.getUserRepos(username).subscribe((repos) => {
      this.repos = repos;
    });
  }
}
