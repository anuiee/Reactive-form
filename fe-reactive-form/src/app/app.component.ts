import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe-reactive-form';
  myForm ! : FormGroup;
 
constructor(public formbuilder : FormBuilder ){
  this.myForm=this.formbuilder.group({
    name : [''],
    author : [''],
    publication : [''],
    price : [''],
    genre : [''],
    publishedDate : [''],
    country : [''],
    description :['']

  })
}
submit(){
  console.log(this.myForm);
 
  
}
}