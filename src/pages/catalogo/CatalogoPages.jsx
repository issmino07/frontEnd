import React, { useState, useEffect } from 'react';
import classes from './CatalogPage.module.css'; // Asegúrate de tener un archivo CSS para los estilos

const initialProducts = [
  {
    id: 1,
    name: 'Ensalada César',
    description: 'Deliciosa ensalada con pollo, crutones y aderezo César.',
    price: 10,
    imageUrl: 'https://imag.bonviveur.com/ensalada-de-lechuga-y-tomate-foto-cerca.jpg',
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Clásica pizza con tomate, mozzarella y albahaca fresca.',
    price: 20,
    imageUrl: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg',
  },
  {
    id: 3,
    name: 'Sushi Variado',
    description: 'Selección de sushi con diferentes tipos de pescado y vegetales.',
    price: 30,
    imageUrl: 'https://content-cocina.lecturas.com/medio/2018/07/19/sushi-variado-tradicional_91be2c41_800x800.jpg',
  },
];

const getInitialProducts = () => {
  const savedProducts = localStorage.getItem('products');
  return savedProducts ? JSON.parse(savedProducts) : initialProducts;
};

export default function CatalogPage() {
  const [products, setProducts] = useState(getInitialProducts);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price || !formData.imageUrl) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    const newProduct = {
      ...formData,
      id: products.length + 1,
      price: parseFloat(formData.price),
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', description: '', price: '', imageUrl: '' });
  };

  return (
    <div className={classes.container}>
      <h1>Catálogo de Productos</h1>
      <div className={classes.cards}>
        {products.map((product) => (
          <div key={product.id} className={classes.card}>
            <img src={product.imageUrl} alt={product.name} className={classes.image} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price ? product.price.toFixed(2) : 'N/A'}</p>
          </div>
        ))}
      </div>
      <h2>Agregar Nuevo Producto</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">URL de la Imagen:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar al Catalogo</button>
      </form>
    </div>
  );
}
