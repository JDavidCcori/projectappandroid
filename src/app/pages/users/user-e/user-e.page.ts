import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-e',
  templateUrl: './user-e.page.html',
  styleUrls: ['./user-e.page.scss'],
})
export class UserEPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Nacimiento',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'email',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
  ];
}
