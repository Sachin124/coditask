import { Component, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html'
})
export class ViewUsersComponent {
  loader: boolean;
  userRepository: any;
  @Input() usersData: any[] = [];
  constructor(private dataService: DataService) { }

  getRepo(userName) {
    this.loader = true;
    this.dataService.getUserRepo(userName.login).subscribe(res => {
      if (res.length === 0) {
        setTimeout(() => {
          this.loader = false;
        }, 2000);
      } else {
        setTimeout(() => {
          this.loader = false;
          this.userRepository = res;
          const customerIndex = this.usersData.findIndex(p => {
            return p.id === userName.id;
          });
          this.usersData[customerIndex].userRepositories = this.userRepository;
        }, 1000);
      }
    }, error => {
      console.log(error);
      this.loader = false;
    })
  }
}
