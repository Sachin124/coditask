import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  usersData: any[] = [];

  sortingTypes: any[] = [
    { id: 1, type: "A to Z" },
    { id: 2, type: "Z to A" },
    { id: 3, type: "Highest Rank↑" },
    { id: 4, type: "Lowest Rank↓" }
  ]

  constructor(private dataService: DataService) { }

  // Get all GitHub Users
  getUsers(keyword) {
    this.dataService.getUsers(keyword).subscribe(res => {
      this.usersData = res.items;
    }, error => {
      console.log(error);
    })
  }

  // Sort function for sorting the usersdata as ascending/ descending/score/highest/lowest
  sortType(sort) {
    if (this.usersData) {
      switch (Number(sort)) {
        // For Users Ascending by Order A-Z
        case 1:
          this.usersData = this.usersData.sort((a, b) => {
            if (a.login < b.login) { return -1; }
            if (a.login > b.login) { return 1; }
            return 0;
          })
          break;

        // For Users Descending by Order Z-A
        case 2:
          this.usersData = this.usersData.sort((a, b) => {
            if (a.login < b.login) { return -1; }
            if (a.login > b.login) { return 1; }
            return 0;
          })
          this.usersData = this.usersData.reverse();
          break;

        // For Users Rank/Score by (Highest)
        case 3:
          this.usersData = this.usersData.sort((a, b) => {
            return b.score - a.score;
          });
          break;

        // For Users Rank/Score (Lowest)
        case 4:
          this.usersData = this.usersData.sort((a, b) => {
            return a.score - b.score;
          });
          break;
        default:
          break;
      }
    }
  }
}
