import { Component, OnInit } from '@angular/core';
import { FirstfiddleService } from '../service/firstfiddle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any
student:any
  constructor(private f:FirstfiddleService) { }

  ngOnInit(): void {
    this.data=this.f.name
    this.student=this.f.students
    console.log(this.student);
    
  }

}
