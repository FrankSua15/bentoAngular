import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  irALink(url: string) {
    window.open(url, '_blank'); // Abre en una nueva pestaña
    // window.location.href = url; O usa esta línea para redirigir en la misma pestaña
  }
}

