import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstfiddleService {
name="welcome to rjit college"
  
students:any[]=[
  {id:1,name:'vikas','age':25,email:'jainvikas887@gmail.com'},
  {id:2,name:'raj','age':30,email:'jainvikas@gmail.com'},
  {id:3,name:'ram','age':20,email:'jain@gmail.com'},
  {id:4,name:'ravi','age':21,email:'jainviki@gmail.com'},
]

  constructor() { }
}
