import { Component, OnInit } from '@angular/core';
import {User} from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../services/profile.service';
//import {Repository} '../repository-class/repository';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  providers:[ProfileService],
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
 
  // user:User;


  constructor(private http:HttpClient) { 
    
  }

  ngOnInit() {
  //   interface ApiResponse{
  //     name:string;
  //     location:string;
  //     followers: string;
  //     following:string;
  //     repos:string;
  //   }
  //   this.http.get<ApiResponse>("https://api.github.com/users/dukundejeanne?access_token=4a6f4836ced47ef9dee7e912fb16ec025c4b9cec").subscribe(data=>
  //     this.user=new User(data.name,data.location,data.followers,data.following))
   }
  

}
