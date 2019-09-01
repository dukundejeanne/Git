import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private access_token='55883cc5b72e71acf216d2c7f9b508b0bb466553';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='dukundejeanne';
    this.access_token='55883cc5b72e71acf216d2c7f9b508b0bb466553';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token +"&access_token=" + this.access_token );
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

