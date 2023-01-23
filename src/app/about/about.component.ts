import { Component, OnInit } from '@angular/core';
import { FirstfiddleService } from '../service/firstfiddle.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data:any
  constructor(private f:FirstfiddleService) { }

  ngOnInit(): void {
    this.data=this.f.name
  }

}
