import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {
  me = [ "Consume enough Vitamins", "rest", "Wash your hands"];
  fluffy = ["Give him probiotics", "Keep him in house"];
  rating = ["neutral","neutral","neutral"];
  pet_rating = ["neutral","neutral"];

  constructor() { }

  ngOnInit() {
  }
change_rating(rating, index){
  console.log(rating, index);
  this.rating[index] = rating;
}
change_pet_rating(rating, index){
  console.log(rating, index);
  this.pet_rating[index] = rating;
}

}
