import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // public users:string;
  users:any;
  user:User;


  public username:string;
  private access_token='55883cc5b72e71acf216d2c7f9b508b0bb466553';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='dukundejeanne';
    this.access_token='55883cc5b72e71acf216d2c7f9b508b0bb466553';
    this.user=new User('','','','','','');

   }
   getProfileInfo(){
    interface ApiResponse{
      name:string;
      html_url:string;
      followers:string;
      following:string;
      location:string;
      avatar_url:string;
     
    }
    let promise = new Promise((resolve,reject)=>{
     return this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token +"&access_token=" + this.access_token +
     environment. apiUrl).toPromise().then(data =>{
      this.user.name=data.name;
      this.user.followers=data.followers;
      this.user .location=data.location;
      this.user.following=data.following;
      this.user .html_url=data.html_url;
      this.user.avatar_url=data.avatar_url;
      resolve();
    },
    error=>{
      //this.user.name="you have errors , and try again "
      reject(error)
      
    })
  })
  return promise;
   }
  
  
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" +
    this.access_token +"/repos&access_token=" + this.access_token );
  }
  updateProfile(username:string){
    this.username=username;
    console.log(username);
  

  }

}

