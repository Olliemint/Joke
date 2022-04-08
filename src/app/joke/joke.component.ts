import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke='My Jokes'

  jokes= ['My joke','Our Joke','Your Joke']
  

  constructor() { }

  ngOnInit(): void {
  }

}
