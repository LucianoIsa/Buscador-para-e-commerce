const productos = [
  {
    nombre: 'Mesa',
    destino: 'Comedor',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 59800
  },
  {
    nombre: 'Escritorio',
    destino: 'Oficina',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 1500
  },
  {
    nombre: 'Lavarropas',
    destino: 'Lavadero',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 10600
  },
  {
    nombre: 'Televisor',
    destino: 'Smart TV',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 93745
  },
  {
    nombre: 'Silla',
    destino: 'Living',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 3100
  },
  {
    nombre: 'Sofá',
    destino: 'Living',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 88350
  },
  {
    nombre: 'Alacena',
    destino: 'Muebles',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 173000
  },
  {
    nombre: 'Campana',
    destino: 'Cocina',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 78000
  },
  {
    nombre: 'Play Station 4',
    destino: 'Gamming',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 196300
  },
  {
    nombre: 'Moto',
    destino: 'Movilidad',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 255800
  },
  {
    nombre: 'Radiador',
    destino: 'Calefacción',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 6500
  },
  {
    nombre: 'Termo',
    destino: 'Cocina',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 8900
  },
  {
    nombre: 'Mousse',
    destino: 'Informatica',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 1925
  },

  {
    nombre: 'Sombrilla',
    destino: 'Camping',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 12500
  },
  {
    nombre: 'Termo',
    destino: 'Camping',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 8900
  },
  {
    nombre: 'Mousse',
    destino: 'Informatica',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 1500
  },
  {
    nombre: 'Billetera',
    destino: 'Bolsillo',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 6500
  },
  {
    nombre: 'Reloj',
    destino: 'Tecnología',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 16300
  },
  {
    nombre: 'Computadoras Portátiles',
    destino: 'Multilugar',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 315000
  },
  {
    nombre: 'Bicicletas',
    destino: 'Garage',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    valor: 64030
  },

];

const producto = document.getElementById("resultado");

const catalogo = () => {
  // Las backtiks(`) o templates string o string literal, sirven para insertar de manera dinámica codigo HTML5 en Javascript
  for (let producto of productos) {
    producto.innerHTML += ` 
      <div class="card" style="width: 18rem;" id="resultado">
          <img src=${producto.imagen} class="card-img-top" alt="imagen-random">
          <div class="card-body">
              <h5 class="card-title">Nombre: ${producto.nombre}</h5>
              <h5 class="card-title">Destino: ${producto.destino}</h5>
              <p class="card-text">Valor: ${producto.valor}</p>
          </div>
      </div>
        `

  }

}
