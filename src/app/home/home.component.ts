import { Component} from '@angular/core';

@Component({
  selector: 'pk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {



  user ={userName: 'Jhilmil', imageSrc: "../assets/images/Cat.jpg"};
  constructor() { }


}
