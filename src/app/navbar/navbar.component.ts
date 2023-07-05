import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  name: string = 'Dominick Thornton';
  contact: string = 'Contact';
  linkedin: string = 'LinkedIn';
  github: string = 'GitHub';
  home: string = 'Home';
  about: string = 'About';
}

