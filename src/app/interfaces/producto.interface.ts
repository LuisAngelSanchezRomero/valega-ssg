export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    imagenUrl: string;
    categoria: 'poleras' | 'jeans' | 'zapatillas' | 'accesorios';
    descripcion?: string;
}