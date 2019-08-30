import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private access_token='4a6f4836ced47ef9dee7e912fb16ec025c4b9cec';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='dukundejeanne';
    this.access_token='4a6f4836ced47ef9dee7e912fb16ec025c4b9cec';

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

