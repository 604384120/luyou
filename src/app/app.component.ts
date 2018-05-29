import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // router:Router这样可以拿到router对象
  constructor(private router:Router){

  }
  toProductDetails(){
    // routerLink传的东西和toProductDetails()方法里面的router.navigate一样
    this.router.navigate(['/product']);
  }
}
