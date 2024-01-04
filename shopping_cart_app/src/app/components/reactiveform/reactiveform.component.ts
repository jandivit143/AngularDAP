import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utilities/custom-validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  regForm:FormGroup;
  minAge:number = 25;
  maxAge:number = 45;
  constructor(private formBuilder:FormBuilder){
    this.regForm = this.formBuilder.group({
      firstname:["Sachin",Validators.required],
      lastname:["",Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(6)])],
      gender:["",Validators.required],
      age:["",[
        Validators.required,
        // provide custom validator
        // CustomValidators.ageRange()
        CustomValidators.ageRange(this.minAge,this.maxAge)
      ]]
    });
  }

  get frm(){return this.regForm.controls;}

  logForm(){
    if(this.regForm.valid){
      console.log(this.regForm.value);
      alert(JSON.stringify(this.regForm.value));
    }else{
      this.regForm.markAllAsTouched();
      alert('Invalid Input Given!');
    }
  }

  reset(){
    this.regForm.reset();
  }
}
