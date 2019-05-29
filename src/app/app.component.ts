import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchQuery;
  usersData: any;
  isCollapsed: boolean = false;
  userRepository: any;
  sortingTypes: any[] = [
    { id: 1, type: "A to Z" },
    { id: 2, type: "Z to A" }
  ]
  constructor(private dataService: DataService) {

  }

  getUsers(keyword) {
    this.dataService.getUsers(keyword).subscribe(res => {
      this.usersData = res.items;
      console.log(this.usersData);

    }, error => {
      console.log(error);
    })
  }

  getRepo(userName) {
    console.log(userName);
    this.isCollapsed = true;
    this.dataService.getUserRepo(userName).subscribe(res => {
      console.log(res);
      this.userRepository = res;
    }, error => {
      console.log(error);

    })
  }

  sortType(sort) {
    console.log(sort);
    if (this.usersData) {
    if (sort == 1) {
      this.usersData = this.usersData.sort((a, b) => {
        if (a.login < b.login) { return -1; }
        if (a.login > b.login) { return 1; }
        return 0;
      })
    }
    else if (sort == 2) {
     
        this.usersData = this.usersData.reverse();
      }
    }
  }

}
