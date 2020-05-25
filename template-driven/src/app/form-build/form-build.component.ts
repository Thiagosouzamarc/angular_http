import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-build',
  templateUrl: './form-build.component.html',
  styleUrls: ['./form-build.component.css']
})
export class FormBuildComponent implements OnInit {

  // clientForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   adress: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // })

  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    adress: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.clientForm.value);
  }

}
