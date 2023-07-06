import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// document.addEventListener('DOMContentLoaded', () => {
//   const cursor = document.createElement('div');
//   const cursorShadow = document.createElement('div');
//   cursorShadow.className = 'cursor-shadow';
//   cursor.className = 'cursor';
//   document.body.appendChild(cursorShadow);
//   document.body.appendChild(cursor);

//   document.addEventListener('mousemove', (event) => {
//     cursorShadow.style.left = `${event.clientX}px`;
//     cursorShadow.style.top = `${event.clientY}px`;
//     cursor.style.left = `${event.clientX}px`;
//     cursor.style.top = `${event.clientY}px`;
//   });
// });

