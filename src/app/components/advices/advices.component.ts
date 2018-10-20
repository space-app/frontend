import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {
  me = [ "Consume enough Vitamins", "rest", "Wash your hands"];
  fluffy = ["Give him probiotics", "Keep him in house"];
  plants = ["water plants", "cover them"];
  rating = ["neutral","neutral","neutral"];
  pet_rating = ["neutral","neutral"];
  plants_rating = ["neutral","neutral"];
  overviews = {
    me: {text:'You are vulnerable', warning: 'Careful!'},
    pet: {text:'Your pet is doing well', warning:'Don\'t worry! '},
    plants: {text: 'Your plants are safe and sound', warning: 'Hooray!'}
}
  active_user = 'me';
  overview = this.overviews['me'].text;
  warning = this.overviews['me'].warning;
  selected;
  constructor(
    private router:Router
  ) { }

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
change_plants_rating(rating, index){
  console.log(rating, index);
  this.plants_rating[index] = rating;
}
feeling_bad(){
  this.router.navigate(['user-input']);
}
activate(user){
  this.active_user = user;
  this.warning = this.overviews[user].warning
  this.overview = this.overviews[user].text;
}
}
