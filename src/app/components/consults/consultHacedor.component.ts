import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'consultHacedor',
  templateUrl: './consultHacedor.component.html'
})
export class consultHacedor {
  constructor(private http: HttpClient) { }
}