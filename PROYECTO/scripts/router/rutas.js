//Este componente puede ser solamente el objeto de configuración,
// no es necesario registrarlo con Vue.componente para usarlo con
// Vue Router.

const inicio = { 
  template: `<div><mi-inicio></mi-inicio> </div>`, 
  name: "inicio" };
  
const recetas = {
  template: `<div> <todas-las-recetas></todas-las-recetas> </div>`,
  name: "recetas",
};
const misRecetas = {
  template: `<div> <ver-mis-recetas></ver-mis-recetas> </div>`,
  name: "misRecetas",
};

// Definir el "mapeo" de rutas.
// Acá es donde asociamos tal ruta a tal componente.
const routes = [
  { path: "/", component: inicio },
  { path: "/componentes/inicio.js", component: inicio },
  { path: "/componentes/recetas.js", component: recetas },
  { path: "/componentes/misRecetas.js", component: misRecetas },
];
// Instanciamos el Router con las routes.
const router = new VueRouter({
  // Este objeto recibe 1 propiedad que sea "routes" que contenga
  // el array de rutas.
  // routes: routes
  // En ES6, se puede abreviar:
  routes, // Si ponen solo una variable dentro de un objeto, se expande
  // al nombre de la variable, con el valor de la variable.
});
// Creamos la instancia de Vue.
// y le decimos a Vue que use el Router.
const appRouter = new Vue({
  el: "#app",
  router,

});
