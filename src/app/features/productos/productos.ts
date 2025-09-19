import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.html',
  styleUrls: ['./productos.scss']
})
export class Productos {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Valega | Productos');
    this.meta.addTags([
      { name: 'description', content: 'Explora nuestra colección de ropa y accesorios: camisas, pantalones, vestidos y más.' },
      { property: 'og:title', content: 'Valega | Productos' },
      { property: 'og:description', content: 'Descubre moda elegante para hombres y mujeres en Valega.' },
      { property: 'og:image', content: 'men2.jpg' }
    ]);
  }
}
