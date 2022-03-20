import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RegisterHacedorService } from './register-hacedor.service';

@Component({
  selector: 'registerHacedor',
  templateUrl: './registerHacedor.component.html'
})
export class registerHacedor implements OnInit{
   
      hacedorForm: FormGroup = this.fb.group({
        name : ['', Validators.required],
        document : ['', Validators.required, Validators.minLength(5), Validators.maxLength(11)],
        direccion : ['', Validators.required],
        email : ['', Validators.required, Validators.email],
        password : ['', Validators.required, Validators.minLength(5), Validators.maxLength(10)],
        job : ['', Validators.required],
        workrange : ['', Validators.required],

    })


    constructor(
        public fb: FormBuilder,
        public hacedorService: RegisterHacedorService,
    ){
        
    }
    ngOnInit(): void {
        


    }

    saveSubmit(){

    }




}