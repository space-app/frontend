import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  selected_symptoms = ["test", "test2"];
  symptoms;
  diagnosis = {};
  constructor(
    private httpService:HttpService,
    private router: Router,
  ) { }

  ngOnInit(
  ) {
    this.httpService.get_symptoms().subscribe((res)=>{
      this.symptoms = res;
    })
  }
  add_new_symptom(element){
    this.selected_symptoms.push(element)
  }
  pop_symptom(symptoms){
    this.selected_symptoms.splice(this.selected_symptoms.findIndex(element =>
      element === symptoms), 1);
  }
  toStatusPage(){
    this.router.navigate(['prognosis'])
  }
  get_possible_diagnosis(){
    this.httpService.send_symptoms(this.selected_symptoms).subscribe((res)=>{
      this.diagnosis = res;
    })
  }
  to_advices_page(){
    this.router.navigate(['advices']);
  }
}
