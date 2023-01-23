import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  mystyle={

    'color': 'yellow',
    'background-color':'purple',
    'width':'200px',
    'border-radius':'10px',
    'padding':'15px 20px',
  }
  myclass={
    'color':true,
    'fontme':true,
    'borderme':true,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
