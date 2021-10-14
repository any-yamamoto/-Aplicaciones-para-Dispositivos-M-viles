Vue.component("todas-las-recetas", {
  data: function () {
    return {
      titulo: "Glaykus, blog de cocteleria",
      descripcion:"Bienvenido a nuestro blog, cada semana subiremos una receta para que puedas sumarla a tu recetario y disfrutar de nuevas experiencias y sabores junto a esta comunidad",

      tragos: [
        {
          trago_id: 1,
          nombre: "Horse Neck",
          origen: "USA",
          dificultad: "Baja",
          ingredientes:
            "Cognac 50 cc, Bitter Angostura, Ginger Ale 200 cc y Naranja 1 Unidad.",
          imagen: "img/tragos/HorseNeck.jpg",
          preparacion:"Pelar una naranja. Luego tome un frasco de mermelada, agregue mucho hielo, coloque la piel de la naranja, 50ml de cognac, y 200 ml de cerveza de jengibre o Ginger Ale. Luego, añada dos golpes de angostura y revuelva.",
        },
        {
          trago_id: 2,
          nombre: "Bloody Mary",
          origen: "Francia",
          dificultad: "Alta",
          ingredientes:
            "1.5 oz. vodka, 6 oz. jugo (zumo) de tomate, 1 pizca de sal, 1 pizca de pimienta, 0.25 oz. salsa Worcestershire, 3 gotas tabasco, 0.5 oz. jugo (zumo) de limón, 1 apio y hielo.",
          imagen: "img/tragos/BloodyMary.jpg",
          preparacion:"Verter los ingredientes líquidos directamente en un vaso alto o copa grande. Revolver y sumergir el apio.",
        },
        {
          trago_id: 3,
          nombre: "Sea Breeze",
          origen: "USA",
          dificultad: "Baja",
          ingredientes:
            "1 1/2 oz. de vodka, 2 oz. jugo de toronja y 2 oz, jugo de arándanos y hielo.",
          imagen: "img/tragos/SeaBreeze.jpg",
          preparacion:"Mezcle bien todos los ingredientes en una coctelera o en una licuadora (agregando más hielo). Servir en un vaso alto y decorar con una rodaja de limón.",
        },
        {
          trago_id: 4,
          nombre: "Tom Collins",
          origen: "Holanda",
          dificultad: "Baja",
          ingredientes:
            "2 oz. de ginebra, 2 oz. de jugo de limón  (zumo de limón), 2 cucharaditas de jarabe de azúcar, Soda (agua mineral, agua carbonatada), 1 rodaja de limón ó naranja., 1 cereza.",
          imagen: "img/tragos/TomCollins.jpg",
          preparacion:"En una coctelera con hielo, combinar la ginebra, el jugo de limón y el jarabe de azúcar. Agitar y colar en un vaso collins con hielo. Terminar de llenar el vaso con soda. Remover y decorar con la cereza y la rodaja de limón o naranja.",
        },
        {
          trago_id: 5,
          nombre: "Daiquiri",
          origen: "Cuba",
          dificultad: "Media",
          ingredientes:
            "1.5 onzas ron oscuro, 1 onza jugo de limón, 1 cucharada de azúcar, 5 fresas y 1/2 taza de hielo.",
          imagen: "img/tragos/Daiquiri.jpg",
          preparacion:"Meter todos los ingredientes en una licuadora con hielo. Licuar hasta que quede estilo ‘frappé’ (granizada).",
        },
        {
          trago_id: 6,
          nombre: "Pisco Sour",
          origen: "Peru",
          dificultad: "Baja",
          ingredientes:
            "3 partes de Pisco,3/4 partes de azucar blanca,1 parte de jugo de limon,1 clara de huevo y hielo picado.",
          imagen: "img/tragos/PiscoSour.jpg",
          preparacion:"En un recipiente se meten todos los ingredientes, y se mezlan hasta dar una consistencia espumosa, a causa de la clara de huevo. Mejor aun, si se tuviera acceso a una licuadora. Servir en un cocktail glass, y encima vertir un poco de canela.",
        },
        {
          trago_id: 7,
          nombre: "Cuba Libre",
          origen: "Cuba",
          dificultad: "Baja",
          ingredientes: "1.5 oz. ron, 0.25 oz. limón y Cola.",
          imagen: "img/tragos/CubaLibre.jpg",
          preparacion:"En un vaso con hielo agregar el ron, la bebida de cola hasta llenar el vaso y al final servir el limón. Mezclar bien.",
        },
        {
          trago_id: 8,
          nombre: "Margarita",
          origen: "Mexico",
          dificultad: "Baja",
          ingredientes:
            "1 1/2 oz. de Tequila, 1 1/2 oz. de Triple Sec, 1 oz. de Jugo de Limón y Hielo.",
          imagen: "img/tragos/Margarita.jpg",
          preparacion:"En una licuadora con, hielo mezclar el jugo de limón, el Tequila y el Triple Sec. Licuar y dejar en forma de granizada (frozen). En el borde de la copa, pasar un limón y voltear en una pequeña montaña de sal. Servir la mezcla y decorar con una rodaja de limón.",
        },
        {
          trago_id: 9,
          nombre: "Mimosa",
          origen: "Francia",
          dificultad: "Baja",
          ingredientes:
            "5 oz. de Vino espumoso (Cava o Champán), Triple Sec y 3 oz.  de Jugo de Naranja (Zumo de Naranja).",
          imagen: "img/tragos/Mimosa.jpg",
          preparacion:"Verter el vino espumoso y el jugo de naranja. Darle un toque de triple sec.",
        },
        {
          trago_id: 10,
          nombre: "Rossini",
          origen: "Italia",
          dificultad: "Baja",
          ingredientes:
            "Champán 120ml, Puré de fresa 30g y Cubitos de hielo 300g.",
          imagen: "img/tragos/Rossini.png",
          preparacion:"Añade 6 cucharadas de cóctel de puré de fresa a un vaso mezclador. Vierte 120 ml de champán. Llena el vaso de cubitos de hielo y remuévelo suavemente. Cuela el cóctel en una copa helada de flauta.",
        },
        {
          trago_id: 11,
          nombre: "Fernet Cola",
          origen: "Argentina",
          dificultad: "Baja",
          ingredientes:
            "50 mililitros de Fernet, 200 mililitros de Coca-Cola y 3 cubos de Hielo.",
          imagen: "img/tragos/FernetCola.jpg",
          preparacion:"En un vaso de trago largo, cuya proporción recomendada es: 30% de Fernet, 70% de coca y tres hielos. Poner el hielo, verter el Fernet, y después ir agregando la Coca-Cola de a poco (se va a volcar todo por el gas), e ir probando hasta que quede del sabor deseado, ni muy dulce ni muy amargo.",
        },
      ],
    };
  },

  template: `
	<div class="container">
			<h1>{{titulo}}</h1>
            <p>{{descripcion}}</p>
            <div class="row listado_tragos">
 			<cada-trago v-for="x in tragos" 
							v-bind:key="x.trago_id"
                            v-bind:id="x.trago_id"
							v-bind:nombre="x.nombre"
							v-bind:alt="x.nombre"
                            v-bind:origen="x.origen" 
                            v-bind:imagen="x.imagen"
                            v-bind:ingredientes="x.ingredientes"
                            v-bind:preparacion="x.preparacion"
                            v-bind:dificultad="x.dificultad">
                           >
  			</cada-trago>
            </div>
	</div>`,
    
});

Vue.component("cada-trago", {
  props: [
    "nombre",
    "origen",
    "imagen",
    "dificultad",
    "trago_id",
    "preparacion",
    "ingredientes",
   
  ],
  template: `
     <div class="col-sm-12 col-md-6 col-lg-4 mb-3" id="trago_id">
        <div class="card recetas text-center">
        <img v-bind:src="imagen"  class="card-img-top" v-bind:alt="nombre"/>
       
        <h2 class="text-center my-2">{{nombre | uppercase}}</h2>
       
        <div class="card-body">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
        </svg>  {{origen}}</p>
            <p>Dificultad: {{dificultad}}</p>
            <h3>Ingredientes:</h3>
            <p class="card-text ">{{ingredientes}} </p>
            <h3>Preparacion:</h3>
            <p class="card-text ">{{preparacion}} </p>
            
        </div>
        </div>
    </div>
   `,

  
  
});
