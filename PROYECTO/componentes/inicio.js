Vue.component("mi-inicio", {
  data: function () {
    return {
      titulo: "Bienvenido a nuestro universo de sabores",
      descripcion:
        "Hola!! Bienvenido a este proyecto a través de este espacio queremos compartir contigo las mejores recetas y tips, y darte el lugar para que guardes a mano esos tragos que te gusta preparar, para que lo puedas hacer desde la comodidad de tu casa. Creemos que no es necesario ser un barman experimentado o tener sofisticados ingredientes, solo hace falta una buena receta y muchas ganas de probar algo rico y diferente.",
      favoritas: [],
    };
  },

  template: `
			<div>
                <div class="container">
                    <h1>{{titulo}}</h1>
                    <p>{{descripcion}}</p>
                </div>
                
                <img src="img/fernet.jpeg" class="d-block w-100 my-4" alt="fernet">
            
				
			</div>
		`,

 
});
