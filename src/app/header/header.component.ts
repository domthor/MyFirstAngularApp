import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  greeting: string = 'Hello!';
  welcomePicture: string = 'assets/images/PicWithDog.jpg';
  sloganBegin: string = 'I\'m ';
  name: string = 'Dominick Thornton';
  sloganEnd: string = ', a versatile full stack developer.';

}
