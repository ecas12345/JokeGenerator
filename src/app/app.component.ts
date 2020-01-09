import { Component } from '@angular/core';
import { JokeService } from './Joke.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catFacts';
  myJokes: any;
  jokeArray = [];
  firstName: string = "";
  lastName: string = "";
  formFilled = false;
  constructor(private jokes: JokeService){
  }

  newJoke(first: string, last: string){
    this.firstName = first;
    this.lastName = last;
    this.getMyJokes();
  }

  ngOnInit(){
  }

  nameEmptyCheck()
  {
    if(this.firstName != '' && this.lastName !='')
      this.formFilled = true;
  }

  getMyJokes(){
    this.jokes.getJokes(this.firstName, this.lastName).subscribe(data => {
      console.log(data);
      this.myJokes = data
      this.jokeArray.push(this.myJokes.value.joke);
      this.firstName = "";
      this.lastName = "";
    })    
  }
  popJoke(index){
   this.jokeArray.splice(index, 1);
  }
}
