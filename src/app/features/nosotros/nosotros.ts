import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.scss']
})
export class Nosotros {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Valega | Sobre Nosotros');
    this.meta.addTags([
      { name: 'description', content: 'Conoce la historia de Valega y nuestra pasión por la moda juvenil y elegante.' },
      { property: 'og:title', content: 'Valega | Sobre Nosotros' },
      { property: 'og:description', content: 'Moda elegante y juvenil creada para marcar diferencia.' },
      { property: 'og:image', content: 'womanvestir.jpg' }
    ]);
  }
}
