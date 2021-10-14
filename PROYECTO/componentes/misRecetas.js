Vue.component("ver-mis-recetas", {
  data: function () {
    return {
      miRecetario: [],
      sin_recetas: "",

      trago_id: 11,
      nombre: "",
      origen: "",
      dificultad: [],
      ingredientes: "",
      imagen: "",
      preparacion: "",

      errores: [],
      enviado: false,
    };
  },
  computed: {
    hayErrores: function () {
      return this.errores.length; // Devuelve cantidad errores
    },
  },
  template: `
			<div class="container">
				<h1>Mi Recetario</h1>
				<p>En esta seccion podras crear tus propias recetas y guardarlas para estar siempre preparado y sorprender a todos con tu repertorio de tragos.</p>
				<p v-if="miRecetario.length == 1 ">Felicidades ya tenes {{miRecetario.length}} receta. Luego del formulario podras verla</p>
				<p v-else-if="miRecetario.length >= 2 ">Felicidades ya tenes {{miRecetario.length}} recetas. Luego del formulario podras verlas</p>
				<p v-else>{{sin_recetas}}</p>
		
				
						<h1 class="mt-5">Ingresa una nueva receta</h1>
					<form class="mb-5 formulario" v-on:submit.prevent="guardar" novalidate >
						<div class="form-group">
						<label>Nombre del trago</label>
							<input type="text" v-model="nombre"  placeholder="Ingrese el nombre del trago" name="nombre" class="form-control" />
						</div>
					
						<div class="form-group">
							<label>Pais de origen</label>
							<input type="text" v-model="origen" placeholder="Ingrese el pais de origen" name="origen" class="form-control">
						</div> 
						

						<div class="form-group">
							<label>Dificultad</label>
							<select placeholder="Elegí su dificultad de preparacion..." name="dificultad" v-model="dificultad" class="form-control" >
								<option value="Baja"> Baja</option>
								<option value="Media"> Media</option>
								<option value="Alta"> Alta</option>
							</select>
						
						</div>
						

						<div class="form-group">
							<label for="ingredientes">Ingredientes</label>
							<textarea v-model="ingredientes" name="ingredientes" class="form-control" placeholder="Ingrese los ingredientes necesarios"></textarea>
						</div>

						<div class="form-group">
							<label>Preparacion</label>
							<textarea v-model="preparacion" name="preparacion" class="form-control" placeholder="Ingrese los pasos para su preparacion"></textarea>
						</div>

			
						<button class="btn btn-block btn-primary mt-2" type="submit">Publicar</button>
					</form>

					<div v-if="enviado === true">
							<div v-if="hayErrores" class="classerror">
							<ul>
								<li v-for="x in errores" >{{x}}</li>
							</ul>
							</div>
							<div v-else class="enviado">
								<span>Enviado con éxito</span>
							</div>
					</div>	
					<h2 v-if="miRecetario.length >= 1" class="text-center">Mis Recetas</h2>
					
			
 		      <mostrar-mis-recetas v-bind:miRecetario="this.miRecetario" > </mostrar-mis-recetas>

			
			</div>
		`,

		mounted: function () {
			this.ver_miRecetario(); },
	
  methods: {
    ver_miRecetario: function () {
      if (localStorage.recetario) {
        this.localStorage = JSON.parse(localStorage.getItem("recetario"));
		for(x of this.localStorage){
			this.miRecetario.push(x);
		};
		// this.miRecetario.push(this.localStorage);
		console.log(this.miRecetario);
		
      } else {
        this.sin_recetas =
          "No hay recetas que mostrar, llena el formulario y guarda tu primera receta.";
      }
    //   console.log(this.$route.path); //Devuelve la ruta en la que estamos


    },

  
    guardar: function () {
      //console.log(e) //evento del submit
      //validacion
      this.enviado = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion
      this.errores = []; //vaciamos el array de errores

      if (!this.nombre) {
        console.log(!this.nombre);
        this.errores.push("El nombre es obligatorio.");
      }
      if (!this.origen) {
        console.log(!this.origen);
        this.errores.push("El origen es obligatorio.");
      }

      if (!this.dificultad[0]) {
        this.errores.push("Debe seleccionar una dificultad.");
      }
      if (!this.ingredientes) {
        this.errores.push("Los ingredientes son obligatorios.");
      }
      if (!this.preparacion) {
        this.errores.push("La preparacion es obligatoria.");
      }

      if (this.errores.length == 0) {
        this.trago_id++;
        nuevoObj = {
          trago_id: this.trago_id,
          nombre: this.nombre,
          origen: this.origen,
          dificultad: this.dificultad,
          ingredientes: this.ingredientes,
          imagen: `img/tragos/miTrago.jpg`,
          preparacion: this.preparacion,
        };

		this.resetearForm();

        if (!localStorage.recetario) {
          this.miRecetario = [];
        } else {
          this.miRecetario = JSON.parse(localStorage.getItem("recetario"));
        }

        this.miRecetario.push(nuevoObj);
        localStorage.setItem("recetario", JSON.stringify(this.miRecetario));

		this.nuevoObj = {
			trago_id: "",
			nombre: "",
			origen: "",
			dificultad: "",
			ingredientes:"",
			imagen: "",
			preparacion: "",
		  };

      }
    },

	resetearForm: function(){
		if(this.errores.length == 0){
			location.reload();
		}

	},

  },
});

Vue.component("mostrar-mis-recetas", {
    props:["miRecetario"],
    template: `
	<div v-if="this.miRecetario.length > 0" class="row listado_tragos">
						
	<cada-trago v-for="x in miRecetario" 
			v-bind:key="x.trago_id"
			v-bind:id="x.trago_id"
			v-bind:nombre="x.nombre"
			v-bind:alt="x.nombre"
			v-bind:origen="x.origen" 
			v-bind:imagen="x.imagen"
			v-bind:ingredientes="x.ingredientes"
			v-bind:preparacion="x.preparacion"
			v-bind:dificultad="x.dificultad" 
			>
			
	</cada-trago>

</div>`,

 })