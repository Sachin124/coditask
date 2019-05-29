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
  usersData: any[]=[];
  isCollapsed: boolean = false;
  userRepository: any;
  sortingTypes: any[] = [
    { id: 1, type: "A to Z" },
    { id: 2, type: "Z to A" },
    { id: 3, type: "Rank ^" },
    { id: 4, type: "Rank <" }

  ]
  constructor(private dataService: DataService) {

  }

  getUsers(keyword) {
    this.dataService.getUsers(keyword).subscribe(res => {
      this.usersData = res.items;
    }, error => {
      console.log(error);
    })
  }

  getRepo(userName) {
    this.dataService.getUserRepo(userName.login).subscribe(res => {
      console.log(res);
      this.userRepository = res;
      const customerIndex = this.usersData.findIndex(p=>{
        return p.id === userName.id;
      });
      this.usersData[customerIndex].userRepositories = this.userRepository;
console.log(this.usersData[customerIndex]);
    }, error => {
      console.log(error);

    })
  }

  sortType(sort) {
    if (this.usersData) {
      switch (Number(sort)) {
        case 1:
          this.usersData = this.usersData.sort((a, b) => {
            if (a.login < b.login) { return -1; }
            if (a.login > b.login) { return 1; }
            return 0;
          })
          break;
  
        case 2:
        this.usersData = this.usersData.sort((a, b) => {
          if (a.login < b.login) { return -1; }
          if (a.login > b.login) { return 1; }
          return 0;
        })
          this.usersData = this.usersData.reverse();
          break;
  
        case 3:
          this.usersData = this.usersData.sort((a, b) => {
            return b.score - a.score;
          });
          break;
  
        case 4:
          this.usersData = this.usersData.sort((a, b) => {
            return a.score - b.score;
          });
          break;
  
        default:
          break;
      }
    }

    
    console.log(this.usersData);

  }
}
