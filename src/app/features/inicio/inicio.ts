import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss']
})
export class Inicio {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Valega | Moda Elegante y Juvenil');
    this.meta.addTags([
      { name: 'description', content: 'Valega ofrece moda elegante y juvenil para quienes marcan la diferencia. Encuentra ropa, accesorios y más.' },
      { property: 'og:title', content: 'Valega | Moda Elegante y Juvenil' },
      { property: 'og:description', content: 'Encuentra ropa y accesorios con estilo en Valega.' },
      { property: 'og:image', content: 'banner.jpeg' }
    ]);
  }
}
