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
  isCollapse: boolean = false;
  constructor(private dataService: DataService){
    
  }

  getUsers(keyword){    
    this.dataService.getUsers(keyword).subscribe(res=>{
      this.usersData = res.items;
      console.log(this.usersData);      

    },error=>{
      console.log(error);      
    })
  }

}
