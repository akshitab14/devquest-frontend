import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }
  registerUser(user : User){
    return this.http.post('http://localhost:3000/users',user);
  }
  validateUser(user : any){
    return this.http.post('http://localhost:3000/users/validate',user);
  }
}
