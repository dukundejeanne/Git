import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private accessToken='4a6f4836ced47ef9dee7e912fb16ec025c4b9cec';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='dukundejeanne';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?accessToken=" +
     this.accessToken + "&accesstoken=" +this. accessToken);
   }
   updateProfile(username:string){
     this.username=username;
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "?accessToken=" +
    this.accessToken + "&accesstoken=" +this. accessToken);
  }
}

