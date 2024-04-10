let app1 = document.getElementById('typewriter');
 
let typewriter1 = new Typewriter(app1, {
  loop: true,
  delay: 75,
});
 
typewriter1
  .pauseFor(2500)
  .typeString('Construyendo futuro')
  .pauseFor(200)
  .deleteChars(10)
  .start();

let app2 = document.getElementById('Servicios');
 
let typewriter2 = new Typewriter(app2, {
  loop: true,
  delay: 75,
});
 
typewriter2
  .pauseFor(1500)
  .typeString('Obras Destacadas')
  .pauseFor(200)
  .deleteChars(5)
  .start();

  const imagenes= document.getElementsByClassName('efecto');
  new simpleParallax(imagenes, {scale:2})