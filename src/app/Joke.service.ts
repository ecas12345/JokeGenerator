import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJokes(firstName: string, lastName: string)
  {
    return this.http.get<any>('http://api.icndb.com/jokes/random?firstName='+ firstName + '&lastName=' + lastName);
  }
}
