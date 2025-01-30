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
  mode: string = 'Dark Mode';

  isDarkMode = true;

  themeToggler: HTMLElement | null = null;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeToggler = document.getElementById('themeToggler');

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      if(this.themeToggler != null){
        this.themeToggler.classList.remove('fa-sun');
        this.themeToggler.classList.add('fa-moon');
      }
      this.mode = 'Dark Mode';

    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      if(this.themeToggler != null){
        this.themeToggler.classList.remove('fa-moon');
        this.themeToggler.classList.add('fa-sun');
      }
      this.mode = 'Light Mode';
    }
  }



  
}

